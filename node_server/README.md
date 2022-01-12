# **Node js ile sunucu oluşturma**
Node.js de sunucu ve http protokolü ile çalışmak için http modülünü kullanırız.Bir sunucu oluşturmak için http.createServer() metodunu çağırın:
```javascript
const http = require('http')
http.createServer().listen(3000)
```
createServer() metodu, bir http. Server nesnesi döndürür. Ancak sunucunun gelen bağlantıları dinlemesi ve işlemesi için sunucu nesnesinde listen() metodun çağrılması gerekir,parametre olarak sunucunun başlatıldığı port numarasını veriyoruz. Bağlantıları işlemek için createServer yöntemine özel bir fonksiyon iletebilirsiniz: 
```javascript
const http = require('http')
http
  .createServer(function (request, response) {
    response.end('Hi patika.dev :)')
  }).listen(3000)
```
Bu fonksiyon iki parametre alıyor:
- *response* - sorgu hakkında bilgi depolar
- *request* - cevapın gönderilmesini yönetir
---
Request parametresi, istek hakkında bilgi sağlar ve bir http.IncomingMessage nesnesini temsil eder. Bu nesnenin bazı temel özelliklerini not edelim:

- ```headers```: isteğin başlıklarını döndürür.
- ```method```: istek türü (GET, POST, DELETE, PUT)
- ```url```: istenen adresi temsil eder
---
Response parametresi, cevapın nasıl gönderildiğini kontrol eder ve bir http.ServerResponse nesnesini temsil eder. İşlevselliği aşağıdaki yöntemleri içerir:

- ```statusCode```: cevapa statüs kodunu ayarlar
- ```statusMessage```: statüs koduyla birlikte gönderilen mesajı ayarlar
- ```setHeader```(ad, değer): cevapa bir başlık ekler
- ```write```: cevapa bir miktar içerik yazar
- ```writeHead```: cevapa bir statüs kodu ve bir takım başlık ekler
- ```end```: Sunucuya cevapın başlıklarının ve gövdesinin ayarlandığını bildirir, - sonunda cevap istemciye gönderilir. Bu yöntem her istekte çağrılmalıdır.

## **Yönlendirme**

Varsayılan olarak, Node.js yerleşik bir yönlendirme sistemine sahip değildir. Bu işlemi genelde Express gibi kütüphaneler kullanarak daha kolaylıkla yapılır. Ancak, birkaç rotanın en basit işlenmesini sınırlandırmak gerekirse, bunun için Request nesnesinin url özelliğini kullanmak oldukça mümkündür. Örneğin:
```javascript
const http=require("http");
const port=3000;
http.createServer((request, response)=>{
    response.setHeader("Content-Type", "text/html; charset=utf-8;");
    if(request.url==="/" || request.url==="/home"){
        response.write("<h2>Home</h2>")
    }else if(request.url==="/about"){
        response.write("<h2>About</h2>")
    }else if(request.url==="/conatct"){
        response.write("<h2>Contact</h2>")
    }else{
        response.write("<h2>Not Found</h2>")
    }
    response.end() 
}).listen(port,()=>{
    console.log(`Server working with localhost:${port} port`);
})
```