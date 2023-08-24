

// 翻译服务配置
const googleTranslateConfig = {
  apiKey: "",
  sourceLanguage: "en",
  targetLanguage: "zh-CN",
};

const deeplTranslateConfig = {
  apiKey: "YOUR_DEEPL_TRANSLATE_API_KEY",
  sourceLanguage: "en",
  targetLanguage: "zh-CN",
};

const microsoftTranslateConfig = {
  apiKey: "YOUR_MICROSOFT_TRANSLATE_API_KEY",
  sourceLanguage: "en",
  targetLanguage: "zh-CN",
};

// 翻译函数
function translate(text, translateConfig) {
  // 构造请求参数
  let params = {
    text: text,
  };

  // 发送请求
  let xhr = new XMLHttpRequest();
  xhr.open("POST", translateConfig.apiUrl, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify(params));

  // 处理响应
  xhr.onload = function() {
    if (xhr.status === 200) {
      // 解析响应
      let response = JSON.parse(xhr.responseText);
      return response.translations[0].translatedText;
    } else {
      // 出错处理
      return "";
    }
  };
}

// 主函数
function main() {
  // 绑定事件
  document.getElementById("sourceText").addEventListener("keyup", translateText);
}

// 翻译文本
function translateText() {
  // 获取文本输入框中的文本
  let sourceText = document.getElementById("sourceText").value;

  // 调用翻译服务
  let googleTranslation = translate(sourceText, googleTranslateConfig);
  let deeplTranslation = translate(sourceText, deeplTranslateConfig);
  let microsoftTranslation = translate(sourceText, microsoftTranslateConfig);

  // 显示翻译结果
  document.getElementById("googleTranslation").innerHTML = googleTranslation;
  document.getElementById("deeplTranslation").innerHTML = deeplTranslation;
  document.getElementById("microsoftTranslation").innerHTML = microsoftTranslation;
}

// 启动程序
main();
