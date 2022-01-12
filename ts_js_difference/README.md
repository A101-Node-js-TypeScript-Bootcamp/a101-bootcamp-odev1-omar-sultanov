# **Typescript - Javascript arasındaki farklar**
## **Typescript**
TypeScript, amacı olarak JavaScript'ten farklı değildir, ancak büyük uygulamalar geliştirmek için kullanılır. TypeScript JavaScript'e. trans derler (kaynak kodu derler) . Nesne yönelimli bir programlama dilinin yapısını takip eder ve sınıflar, arayüzler, ad alanları ve kalıtım gibi özellikleri destekler. TypeScript'te tür ek açıklamaları (sayılar, dizeler ve booleanlar) kullanılarak statik tip yazma mümkündür. Örneğin, 
```typescript
class Student {
private name: string;
}
```
Yukarıda gördüğümüz gibi, TypeScript güçlü typing bir şekilde yazılmıştır. Bu, büyük projeler için kodlamanın daha verimli bir yolu olan hata ayıklamayı (derleme zamanında) kolaylaştırır. Bir TypeScript programı genellikle modüller, işlevler, değişkenler, yorumlar, ifadeler ve operatörlerden oluşur - tıpkı diğer tam eksiksiz programlama dilleri gibi.

--------
## **TypeScript vs Javascript: karşılaştırma**
| Typescript      | Javascript |
| ----------- | ----------- |
| Büyük projeler için kod karmaşıklığının üstesinden gelmek üzere tasarlanmış bir nesne yönelimli bir programlama dilidir.     | Web sayfalarında dinamik içerik oluşturmanıza yardımcı olan bir betik dili.       |
| Hatalar derleme(compilation) zamanında bulunabilir ve düzeltilebilir.   | Hatalar, yorumlanmış (interpreted) bir dil olduğu için yalnızca çalışma zamanında bulunabilir.        |
| Hem statik hem de dinamik typing destekler.      | Statik typing özelliği yok.       |
| TypeScript statik tip kontrolüne sahiptir.   | Javascript'te statik tip kontrolü yok.         |
| Tarayıcıların okuyabilmesi için derleyicisinin  ts faylını JavaScript'e dönüştürülmesi gerekir.      | Doğrudan tarayıcılarda kullanılabilir ve bir derleyici gerektirmez.       |
| ES3, ES4, ES5 ve ES6 desteği vardır.   | Ekstra funksiyaların derlenmesi için ES3, ES4, ES5 veya ES6 desteği yok.        |
| Verileri tanımlamak için modülleri, jenerikleri ve arayüzleri destekler.      | Modül, jenerik veya arayüzü desteği yok       |
| Fonksiyonlar isteğe bağlı parametrelere sahip olabilir.   | Bu özellik JavaScript'te mevcut değildir.        |
| Prototipleme mümkün.   | Prototipleme desteği yok.        |
| Statik tür tanımları, uygun yapı kurulumunu gerektirir (npm paketi).   | Yapı kurulumu gerekmez.        |
| TypeScript hem istemci tarafında hem de sunucu tarafında çalışır.   | JavaScript istemci tarafında çalışır.         |
----

## **Kaynaklar**
1. [senior.ua](https://senior.ua/articles/raznica-mezhdu-typescript-i-javascript)
2. [ru.strephonsays.com](https://ru.strephonsays.com/javascript-and-vs-typescript-13697)
3. [habr.com](https://habr.com/ru/post/308374/)
4. [skillbox.ru](https://skillbox.ru/media/code/typescript_kak_s_nim_rabotat_i_chem_on_otlichaetsya_ot_javascript/)