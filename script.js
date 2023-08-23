
document.getElementById('translateBtn').addEventListener('click', () => {

  const inputText = document.getElementById('input').value;

  // 调用不同翻译API
  translateToEn(inputText); 
  translateToZh(inputText);
  translateToJa(inputText);

});

// Google 翻译到英文
function translateToEn(text) {
  fetch(`https://translation.googleapis.com/language/translate/v2?q=${text}&target=en`)
    .then(res => res.json())
    .then(data => {
      document.getElementById('en').innerText = data.data.translations[0].translatedText;
    });  
}

// 其他翻译API调用...

function translateToZh(text) {
  // 调用中文翻译API
}

function translateToJa(text) {
  // 调用日文翻译API 
}
