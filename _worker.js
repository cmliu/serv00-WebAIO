export default {
  async fetch(request, env) {
    return new Response(HTML, {
      headers: {
        "content-type": "text/html;charset=UTF-8",
      },
    });
  },
};

const HTML = `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>serv00一键安装</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f0f2f5;
        }
        .container {
            background: white;
            padding: 2rem;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .form-group {
            margin-bottom: 1rem;
        }
        input {
            width: 100%;
            padding: 8px;
            margin: 8px 0;
            border: 1px solid #ddd;
            border-radius: 4px;
            box-sizing: border-box;
        }
        .button-group {
            display: flex;
            gap: 10px;
        }
        .button-group button {
            flex: 1;
        }
        button {
            width: 100%;
            padding: 10px;
            background-color: #1890ff;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        button:hover {
            background-color: #096dd9;
        }
        .form-group label {
            display: block;
            margin-bottom: 4px;
            color: #333;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="form-group">
            <label>serv00账号:</label>
            <input type="text" id="username" placeholder="请输入serv00账号">
        </div>
        <div class="form-group">
            <label>密码:</label>
            <input type="password" id="password" placeholder="请输入密码">
        </div>
        <div class="button-group">
            <button onclick="install()">一键安装</button>
            <button onclick="ssh()">一键SSH</button>
        </div>
    </div>

    <script>
        function install() {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            if (!username || !password) {
                alert('请填写账号和密码');
                return;
            }

            const url = \`https://ssh.cmliussss.net/?hostname=\${username}.serv00.net&port=22&username=\${username}&password=\${btoa(password)}&command=bash%20%3C(curl%20-Ls%20https%3A%2F%2Fraw.githubusercontent.com%2Feooce%2Fsing-box%2Fmain%2Fsb4.sh)\`;
            window.open(url, '_blank');
        }

        function ssh() {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            if (!username || !password) {
                alert('请填写账号和密码');
                return;
            }

            const url = \`https://ssh.cmliussss.net/?hostname=\${username}.serv00.net&port=22&username=\${username}&password=\${btoa(password)}\`;
            window.open(url, '_blank');
        }
    </script>
</body>
</html>
`;
