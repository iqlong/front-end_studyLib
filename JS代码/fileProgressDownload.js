function downloadWithProgress(url='http://localhost:9001/download/龙井路爬坡-4k.mp4') {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "blob"; // 以二进制数据接收

    // 监听进度事件
    xhr.onprogress = function (event) {
      if (event.lengthComputable) {
        const percent = ((event.loaded / event.total) * 100).toFixed(2);
        document.getElementById("file-progress").textContent = `下载进度: ${percent}%`;
        console.log(`下载进度: ${percent}%`);
      }
    };

    xhr.onload = function () {
      if (xhr.status === 200) {
        const blob = xhr.response;
        const url = URL.createObjectURL(blob);
        
        // 创建下载链接
        const a = document.createElement("a");
        a.href = url;
        a.download = "file.mp4"; // 指定下载文件名
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        
        URL.revokeObjectURL(url);
        resolve();
        console.log("下载成功===");
      } else {
        reject(new Error(`下载失败: ${xhr.status}`));
      }
    };

    xhr.onerror = () => reject(new Error("下载出错"));
    xhr.send();
  });
}
