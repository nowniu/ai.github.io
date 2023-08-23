// JS代码 

// API密钥 
const GOOGLE_KEY = 'xxx';
const DEEPL_KEY = 'xxx'; 
const AZURE_KEY = 'xxx';

// DOM元素
const loadingIcon = document.getElementById('loadingIcon');  
const inputText = document.getElementById('input');
// ......

// 翻译函数
async function translate(text) {
  // 调用不同平台API 
  // 返回结果数组
}

// 平台翻译函数
async function googleTranslate(text) {
  // 调用谷歌API
} 

async function deeplTranslate(text) {
  // 调用DeepL API
}

async function azureTranslate(text) {
  // 调用Azure API 
}

// 点击处理
translateBtn.addEventListener('click', async () => {
  // 显示loading
  // 调用翻译并渲染结果
  // 隐藏loading
});

// 出错处理
function handleError(err) {
  // 隐藏loading  
  // 提示错误
}
