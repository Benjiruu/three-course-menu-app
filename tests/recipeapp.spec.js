const { test, expect } = require('@playwright/test');

test.describe('Three-Course Menu App', () => {
  test('should navigate to recipe selection from home page', async ({ page }) => {
    await page.goto('http://localhost:8080');
    await page.click('text=Kom igång');
    await expect(page).toHaveURL('http://localhost:8080/recipe-selection');
  });

  test('should display error message if not all categories are selected', async ({ page }) => {
    const response = await page.goto('http://localhost:8080/recipe-selection', { waitUntil: 'load', bypassCache: true });
    if (response.status() !== 200) {
      console.error(`Failed to load page: ${response.status()}`);
      return;
    }
    await page.click('text=Spara');
    await expect(page.locator('.error')).toHaveText('Vänligen välj en rätt för varje kategori.');
  });

  test('should navigate to menu summary after selecting all categories', async ({ page }) => {
    const response = await page.goto('http://localhost:8080/recipe-selection', { waitUntil: 'load', bypassCache: true });
    if (response.status() !== 200) {
      console.error(`Failed to load page: ${response.status()}`);
      return;
    }
    page.on('response', response => {
      console.log('Response URL:', response.url(), 'Status:', response.status(), 'Response:', JSON.stringify(response));
    });
    await page.waitForSelector('input[type="radio"]', { state: 'visible' });
    await page.click('label:has-text("Vitlökscrème med örtolja och rostad ciabatta")');
    await page.click('label:has-text("Oxfilé med rödvinsås och potatismos")');
    await page.click('label:has-text("Crème brûlée med vanilj och bär")');
    await page.fill('input#portions', '2');
    await page.click('text=Spara');
    await expect(page.url()).toContain('http://localhost:8080/menu-summary');
  });

  test('should display selected menu on menu summary page', async ({ page }) => {
    const response = await page.goto('http://localhost:8080/menu-summary?selectedRecipes={"appetizer":{"name":"Vitlökscrème med örtolja och rostad ciabatta"},"mainCourse":{"name":"Oxfilé med rödvinsås och potatismos"},"dessert":{"name":"Crème brûlée med vanilj och bär"}}&portions=2', { waitUntil: 'load', bypassCache: true });
    if (response.status() !== 200) {
      console.error(`Failed to load page: ${response.status()}`);
      return;
    }
    await expect(page.locator('.menu-section:has-text("Förrätt")')).toContainText('Vitlökscrème med örtolja och rostad ciabatta');
    await expect(page.locator('.menu-section:has-text("Huvudrätt")')).toContainText('Oxfilé med rödvinsås och potatismos');
    await expect(page.locator('.menu-section:has-text("Efterrätt")')).toContainText('Crème brûlée med vanilj och bär');
  });

  test('should navigate to shopping list from menu summary', async ({ page }) => {
    const response = await page.goto('http://localhost:8080/menu-summary?selectedRecipes={"appetizer":{"id":1,"name":"Vitlökscrème med örtolja och rostad ciabatta","ingredients":[{"name":"vitlök","quantity":"1","unit":"klyfta"},{"name":"grädde","quantity":"1","unit":"dl"},{"name":"örtolja","quantity":"1","unit":"msk"},{"name":"ciabatta","quantity":"1","unit":"skiva"}]},"mainCourse":{"id":4,"name":"Oxfilé med rödvinsås och potatismos","ingredients":[{"name":"oxfilé","quantity":"150","unit":"g"},{"name":"rödvin","quantity":"1","unit":"dl"},{"name":"potatis","quantity":"200","unit":"g"},{"name":"grädde","quantity":"0.5","unit":"dl"}]},"dessert":{"id":7,"name":"Crème brûlée med vanilj och bär","ingredients":[{"name":"grädde","quantity":"1","unit":"dl"},{"name":"vanilj","quantity":"1","unit":"st"},{"name":"socker","quantity":"2","unit":"msk"},{"name":"bär","quantity":"0.5","unit":"dl"}]}}&portions=2', { waitUntil: 'load', bypassCache: true });
    if (response.status() !== 200) {
      console.error(`Failed to load page: ${response.status()} - ${await response.text()}`);
      return;
    }
    page.on('response', response => {
      console.log('Response URL:', response.url(), 'Status:', response.status());
    });
    await page.click('text=Visa Inköpslista');
    await expect(page).toHaveURL(/http:\/\/localhost:8080\/shopping-list\?selectedRecipes=.*/);
  });

  test('should navigate to cooking page from menu summary', async ({ page }) => {
    const response = await page.goto('http://localhost:8080/menu-summary?selectedRecipes={"appetizer":{"id":1,"name":"Vitlökscrème med örtolja och rostad ciabatta","ingredients":[{"name":"vitlök","quantity":"1","unit":"klyfta"},{"name":"grädde","quantity":"1","unit":"dl"},{"name":"örtolja","quantity":"1","unit":"msk"},{"name":"ciabatta","quantity":"1","unit":"skiva"}],"instructions":"1. Stek vitlök i olja. 2. Tillsätt grädde och koka upp. 3. Mixa till en slät crème. 4. Servera med rostad ciabatta och örtolja."},"mainCourse":{"id":4,"name":"Oxfilé med rödvinsås och potatismos","ingredients":[{"name":"oxfilé","quantity":"150","unit":"g"},{"name":"rödvin","quantity":"1","unit":"dl"},{"name":"potatis","quantity":"200","unit":"g"},{"name":"grädde","quantity":"0.5","unit":"dl"}],"instructions":"1. Stek oxfilén. 2. Koka upp rödvin till en reduktion. 3. Koka potatis och mosera med grädde. 4. Servera allt tillsammans."},"dessert":{"id":7,"name":"Crème brûlée med vanilj och bär","ingredients":[{"name":"grädde","quantity":"1","unit":"dl"},{"name":"vanilj","quantity":"1","unit":"st"},{"name":"socker","quantity":"2","unit":"msk"},{"name":"bär","quantity":"0.5","unit":"dl"}],"instructions":"1. Värm grädde och vanilj. 2. Vispa ägg och socker. 3. Blanda och grädda i ugn. 4. Strö över socker och bränn med en brännare. 5. Toppa med bär."}}&portions=2', { waitUntil: 'load', bypassCache: true });
    if (response.status() !== 200) {
      console.error(`Failed to load page: ${response.status()}`);
      return;
    }
    page.on('response', response => {
      console.log('Response URL:', response.url(), 'Status:', response.status());
    });
    await page.click('text=Gå till Matlagning');
    await expect(page.url()).toContain('http://localhost:8080/cooking-page');
  });
});
