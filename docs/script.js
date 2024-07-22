const colors = ['gray','red','orange','yellow','green','blue','indigo','purple','pink']

const randomColor = () => colors[Math.floor(Math.random() * colors.length)]

const applyRandomPrimaryColor = () => {
  const scriptTag = document.getElementById('my-template-data');
  if (scriptTag) {
    const jsonData = JSON.parse(scriptTag.textContent);
    jsonData.primaryColor = randomColor();
    scriptTag.textContent = JSON.stringify(jsonData);
  }
};

applyRandomPrimaryColor();
