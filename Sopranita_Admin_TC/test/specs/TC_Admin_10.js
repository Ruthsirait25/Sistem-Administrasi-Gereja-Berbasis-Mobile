const { remote } = require('webdriverio');

const opts = {
  port: 4723,
  capabilities: {
    alwaysMatch: {
      'appium:platformName': 'Android',
      'appium:platformVersion': '11',
      'appium:deviceName': 'palmarum',
      'appium:app': 'D:\\IT DEL\\SEMESTER 5\\Matakuliah\\PPL\\Proyek\\Sistem-Administrasi-Gereja-Berbasis-Mobile\\HKBP Palmarum.apk',
      'appium:automationName': 'UiAutomator2',
      'appium:appPackage': 'com.example.hkbptarutung',
      'appium:noReset': true,
      'appium:newCommandTimeout': '3600',
    },
    firstMatch: [{}],
  },
};



(async () => {
  const driver = await remote(opts);

  const el1 = await driver.$("id:com.example.hkbptarutung:id/edt_email");
  await el1.addValue("admin@gmail.com");
  const el2 = await driver.$("id:com.example.hkbptarutung:id/edt_password");
  await el2.addValue("123123");
  const el3 = await driver.$("id:com.example.hkbptarutung:id/btn_login");
  await el3.click();
  const el4 = await driver.$("id:com.example.hkbptarutung:id/iv_registrasi");
  await el4.click();
  const el5 = await driver.$("xpath://android.widget.TextView[@resource-id=\"com.example.hkbptarutung:id/tv_rv_regislanding_title\" and @text=\"Registrasi baptis\"]");
  await el5.click();
  const el6 = await driver.$("xpath:(//android.widget.TextView[@resource-id=\"com.example.hkbptarutung:id/tv_registrasi_type\"])[3]");
  await el6.click();
  const el8 = await driver.$("id:com.example.hkbptarutung:id/iv_btn_delete");
  await el8.click();
  const el9 = await driver.$("id:android:id/button1");
  await el9.click();
  const el10 = await driver.$("accessibility id:default");
  await el10.click();
  const el11 = await driver.$("id:com.example.hkbptarutung:id/iv_btn_back");
  await el11.click();
  const el12 = await driver.$("xpath://android.widget.TextView[@text=\"Log out\"]");
  await el12.click();

  await driver.waitUntil(() => {
    // Tambahkan kondisi yang memeriksa apakah halaman sudah dimuat sepenuhnya
    return // kondisi yang harus dipenuhi
 }, { timeout: 15000, timeoutMsg: 'Halaman tidak dimuat sepenuhnya dalam 15 detik' });

 
  await driver.deleteSession();
})();
