UX Rocket Placeholder
====================
Placeholder eklentisi, metin alanlarında örnek içerik göstermeye yarayan `placeholder` değerini desteklemeyen _Internet Explorer 8_ ve _Internet Explorer 9_ için hazırlanmıştır. Sistem IE9 ve altına destek vermediği durumlarda, kullanılmasına gerek yoktur.

```HTML
<input type="text" placeholder="Birşeyler yazınız" />
<textarea placeholder="Birşeyler yazınız">&lt;/textarea>
```

### Notlar
Tarayıcının `placeholder` destekleyip desteklemediği kontrol edilerek çalıştırılır. Tarayıcı destek veriyorsa ya da elemanda `placeholder` tanımlanmamışsa çalışmaz.


### Public Metodlar
Method					  | Açıklama
------------------------- | -------------------------------------------------------
$(selector).placeholder() | Bu method plugini manuel olarak bir elemana bağlamanızı sağlar.
$.uxplaceholder           | Bu method pluginin detayını görmenizi sağlar
$.uxplaceholder.version   | Sayfaya eklenmiş pluginin versiyon numarasını gösterir.