# Hava Durumu Uygulaması

Bu uygulama, kullanıcılara farklı şehirlerin hava durumu tahminlerini görüntüleme imkanı sunar. Kullanıcılar, arama yaparak istedikleri şehirlerin anlık hava durumu bilgilerine ve bir haftalık hava durumu tahminlerine ulaşabilirler. Uygulama ayrıca, kullanıcının mevcut konumundan hava durumu verilerini otomatik olarak alabilme özelliğine de sahiptir.

## Kullanılan Teknolojiler

- **React**: Kullanıcı arayüzü oluşturmak için kullanılan bir JavaScript kütüphanesi.
- **Axios**: HTTP istekleri yapmak için kullanılan bir Promise tabanlı HTTP istemcisi.
- **React Swipeable**: Mobil cihazlarda kaydırma hareketlerini algılamak için kullanılan bir kütüphane.
- **OpenWeatherMap API**: Hava durumu verilerini sağlayan bir web servisi.

## Kurulum

Projeyi lokalde çalıştırmak için aşağıdaki adımları takip edin:

1. Projeyi klonlayın veya indirin:

```bash
git clone https://github.com/your-username/your-project-name.git


2. Proje dizinine gidin:

```bash
cd your-project-name


3. Gerekli paketleri yükleyin:

```bash
npm install

3. Uygulamayı çalıştırın:

```bash
npm start

Uygulama, varsayılan web tarayıcınızda http://localhost:3000 adresinde otomatik olarak açılacaktır.

Çevre Değişkenleri
Uygulamanın düzgün çalışabilmesi için, OpenWeatherMap API anahtarınızı içeren bir .env dosyası oluşturmanız gerekmektedir. Aşağıdaki değişkenleri .env dosyanıza ekleyin:

REACT_APP_WEATHER_API_URL=https://api.openweathermap.org/data/2.5
REACT_APP_WEATHER_API_KEY=your_api_key
