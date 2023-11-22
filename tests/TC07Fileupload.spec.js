const {test,expect} = require('@playwright/test')

test('Verify singal fileuplode in playwright',async({page})=>{
    await page.goto('https://webdriveruniversity.com/File-Upload/index.html')
    await page.locator('#myFile').setInputFiles('tests/uploadFiles/image1.jpeg')//choose file

    page.on('dialog',async simpleAlert =>{
    await expect(simpleAlert.message()).toContain('Your file has now been uploaded!')//message
    await expect(simpleAlert.type()).toContain('alert')
    await simpleAlert.accept()
    })

    await page.locator('#submit-button').click()//sumbit
    await expect(page.url())//current url
    .toContain('https://webdriveruniversity.com/File-Upload/index.html?filename=image1.jpeg')
    await page.waitForTimeout(5000)
    })


    test.only('Verify multiple file upload in playwright',async({page})=>{
        await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')

        // await page.locator('#filesToUpload')
        // .setInputFiles(['tests/uploadFiles/image1.jpeg','tests/uploadFiles/image2.jpeg'])
                                 //or
        const file1='tests/uploadFiles/image1.jpeg'
        const file2='tests/uploadFiles/image2.jpeg'
        await page.locator('#filesToUpload')
        .setInputFiles([file1,file2])
        await expect(page.locator('#fileList > li').first()).toHaveText('image1.jpeg')
        await expect(page.locator('#fileList > li').nth(1)).toHaveText('image2.jpeg')
        await page.waitForTimeout(5000)







        

    })
    
    
