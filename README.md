# Hava Durumu Uygulaması

Bu uygulama, kullanıcılara farklı şehirlerin hava durumu tahminlerini görüntüleme imkanı sunar. Kullanıcılar, arama yaparak istedikleri şehirlerin anlık hava durumu bilgilerine ve 5 günlük hava durumu tahminlerine ulaşabilirler ve birden çok şehir ekleyip uygulama arayüzünde şehirler arasında gezinebilirler. Uygulama ayrıca, kullanıcının mevcut konumundan hava durumu verilerini otomatik olarak alabilme özelliğine de sahiptir.

## Canlı Demo

Bu uygulamayı çalışır halde görmek için aşağıdaki linke tıklayabilirsiniz:

[iWeather](https://mahirkursun.github.io/weatherwise/)

## Kullanılan Teknolojiler

- **React**: Kullanıcı arayüzü oluşturmak için kullanılan bir JavaScript kütüphanesi.
- **Axios**: HTTP istekleri yapmak için kullanılan bir Promise tabanlı HTTP istemcisi.
- **React Swipeable**: Mobil cihazlarda kaydırma hareketlerini algılamak için kullanılan bir kütüphane.
- **OpenWeatherMap API**: Hava durumu verilerini sağlayan bir web servisi.

## Projeyi Çalıştırmak İçin Adımlar

Projeyi lokalde çalıştırmak için aşağıdaki adımları takip edebilirsiniz:

1. **Proje Klasörünü İndirme**
   - Projeyi GitHub üzerinden klonlayın veya ZIP olarak indirin.
   ```bash
   git clone https://github.com/your-username/your-project-name.git

   ```
2. **Gerekli Paketleri Yükleme**

- Proje dizininde npm paketlerini yüklemek için aşağıdaki komutu kullanın:
  ```bash
  npm install

  ```

3. **Projeyi Çalıştırma**
   - Ana proje dizininde, aşağıdaki komutu kullanarak projeyi başlatın:
   ```bash
   npm start
   ```

- Bu komut, projenizi lokalde çalıştıracaktır.

Artık projeniz yerel ortamınızda çalışıyor olmalıdır. Tarayıcınızdan http://localhost:3000 adresine giderek projeyi görüntüleyebilirsiniz.

## Çevre Değişkenleri

Uygulamanın düzgün çalışabilmesi için, OpenWeatherMap API anahtarınızı içeren bir .env dosyası oluşturmanız gerekmektedir. Aşağıdaki değişkenleri .env dosyanıza ekleyin:

```bash
REACT_APP_WEATHER_API_URL=https://api.openweathermap.org/data/2.5
REACT_APP_WEATHER_API_KEY=your_api_key
```
