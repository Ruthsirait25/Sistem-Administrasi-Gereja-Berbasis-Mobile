const { remote } = require('webdriverio');

const opts = {
  port: 2121,
  capabilities: {
    alwaysMatch: {
      "platformName": "Android",
      "appium:PlatformVersion": "11",
      "appium:deviceName": "Palmarum",
      "appium:app": "D:\\Proyek fix\\HKBP Palmarum Tarutung\\Sistem-Administrasi-Gereja-Berbasis-Mobile\\HKBP Palmarum.apk",
      "appium:automationName": "UIAutomator2",
      "appium:appPackage": "com.example.hkbptarutung",
      "appium:noReset": true
    },
    firstMatch: [{}],
  },
};

(async () => {
  const driver = await remote(opts);

  try {
    const el1 = await driver.$("id:com.example.hkbptarutung:id/edt_email");
    await el1.click();
    await el1.addValue("admin@gmail.com");

    const el2 = await driver.$("id:com.example.hkbptarutung:id/edt_password");
    await el2.click();
    await el2.addValue("123123");

    const el3 = await driver.$("id:com.example.hkbptarutung:id/iv_registrasi");
    if (el3) {
      console.log('Element found:', el3);
      await el3.click();
    } else {
      console.error('Element not found');
    }

    const el4 = await driver.$("xpath://androidx.recyclerview.widget.RecyclerView[@resource-id=\"com.example.hkbptarutung:id/rv_registrasi\"]/android.widget.FrameLayout[6]");
    await el4.click();

    const el5 = await driver.$("xpath:(//android.widget.TextView[@resource-id=\"com.example.hkbptarutung:id/tv_registrasi_type\"])[6]");
    await el5.click();

    const el6 = await driver.$("xpath://android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout[7]");
    await el6.click();

    const el7 = await driver.$("id:com.example.hkbptarutung:id/btn_batal");
    await el7.click();

    const el8 = await driver.$("id:android:id/button1");
    await el8.click();

    const el9 = await driver.$("id:com.example.hkbptarutung:id/background");
    await el9.click();

    const el10 = await driver.$("accessibility id:default");
    await el10.click();

    const el11 = await driver.$("id:com.example.hkbptarutung:id/iv_btn_back");
    await el11.click();

    const el12 = await driver.$("id:com.example.hkbptarutung:id/ic_logout");
    await el12.click();

    // Menunggu hingga halaman sepenuhnya dimuat
    await driver.waitUntil(() => {
      // Tambahkan kondisi yang memeriksa apakah halaman sudah dimuat sepenuhnya
      return // Kondisi yang harus dipenuhi
    }, { timeout: 30000, timeoutMsg: 'Halaman tidak dimuat sepenuhnya dalam 20 detik' });

  } catch (error) {
    console.error('Error occurred:', error);
  } finally {
    await driver.deleteSession();
  }
})();