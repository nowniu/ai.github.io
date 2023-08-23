// API密钥
const GOOGLE_API_KEY = '1'; 
const DEEPL_API_KEY = '1';
const AZURE_API_KEY = '1';

// ...省略按钮点击处理函数...

// Google 翻译到英文
function translateToEn(text) {
  fetch(`https://translation.googleapis.com/language/translate/v2?key=${GOOGLE_API_KEY}&q=${text}&target=en`)
    .then(res => res.json())
    .then(data => {
      document.getElementById('en').innerText = data.data.translations[0].translatedText;
    });
}

// DeepL 翻译到中文
function translateToZh(text) {
  fetch(`https://api.deepl.com/v2/translate?key=${DEEPL_API_KEY}&text=${text}&target_lang=ZH`)  
    .then(res => res.json())
    .then(data => {
      document.getElementById('zh').innerText = data.translations[0].text;
    });
} 

// Azure 翻译到日文  
function translateToJa(text) {
  fetch(`https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&from=en&to=ja&key=${AZURE_API_KEY}`, {
    method: 'POST',
    body: [{Text: text}]
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById('ja').innerText = data[0].translations[0].text;
  });
}
