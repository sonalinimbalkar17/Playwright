const{test,expect}=require('@playwright/test')

test('Verify datepicker using Playwright',async({page})=>{
    await page.goto('https://www.webdriveruniversity.com/Datepicker/index.html')
    await page.locator('#datepicker').click()
    const date = new Date()
    //let day = date.getDate()
    date.setDate(date.getDate() + 200)
    //let month = date.toLocaleString('default', { month: 'short' })
    let day = date.getDate()
    let monthIndex = date.getMonth()
    let month = date.toLocaleString('default', { month: 'long' })
    let year = date.getFullYear()
    //console.log(monthIndex)
    console.log(month)
    console.log(day)
    console.log(year)

})