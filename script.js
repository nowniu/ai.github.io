// JS代码 

// API密钥 
const GOOGLE_KEY = 'AIzaSyCBlgr3g2wlYaxPC1iq_NirrGBDaVLNTxg';
const DEEPL_KEY = 'xxx'; 
const AZURE_KEY = 'xxx';

// DOM元素
const loadingIcon = document.getElementById('loadingIcon');  
const inputText = document.getElementById('input');
// ......


// 翻译函数
async function translate(text) {

  const [googleRes, deeplRes, azureRes] = await Promise.all([
    googleTranslate(text), 
    deeplTranslate(text),
    azureTranslate(text)
  ]);

  return [googleRes, deeplRes, azureRes];

}

// 调用谷歌翻译API
async function googleTranslate(text) {
  const res = await fetch(`https://translation.googleapis.com/language/translate/v2?q=${text}&target=en&key=${GOOGLE_KEY}`);
  return await res.json();
}

// 调用DeepL API
async function deeplTranslate(text) {
  const res = await fetch(`https://api.deepl.com/v2/translate?auth_key=${DEEPL_KEY}&text=${text}&target_lang=EN`);
  return await res.json();
} 

// 调用Azure API
async function azureTranslate(text) {
  const res = await fetch(`https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&from=en&to=fr&key=${AZURE_KEY}`, {
    method: 'POST',
    body: [{ Text: text }]
  });
  return await res.json();
}


// 点击处理
translateBtn.addEventListener('click', async () => {
  
  showLoading();
  
  const inputText = input.value;
  const result = await translate(inputText);
  
  renderResult(result);
  
  hideLoading();

});

// 渲染结果 
function renderResult(result) {
  googleOut.innerText = result[0].data.translations[0].translatedText;
  deeplOut.innerText = result[1].translations[0].text; 
  azureOut.innerText = result[2][0].translations[0].text;
}
