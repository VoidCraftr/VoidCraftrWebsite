
(function () {
    const config = window.chatscribe;
    if (!config) {
        console.error('Chatscribe configuration not found. Please add the Chatscribe embed script to your website.');
        return;
    }

    const iframe = document.createElement('iframe');
    iframe.id = 'chatscribe-iframe';
    iframe.style.border = 'none';
    iframe.style.position = 'fixed';
    iframe.style.bottom = '20px';
    iframe.style.right = '20px';
    iframe.style.width = '0';
    iframe.style.height = '0';
    iframe.style.zIndex = '9999';
    iframe.style.transition = 'width 0.3s ease, height 0.3s ease';

    document.body.appendChild(iframe);

    const iframeDoc = iframe.contentWindow.document;

    const getContrastingTextColor = (hex) => {
        if (!hex.startsWith('#') || (hex.length !== 4 && hex.length !== 7)) {
            return '#ffffff';
        }
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return (r * 0.299 + g * 0.587 + b * 0.114) > 186 ? '#000000' : '#ffffff';
    };

    const themeColor = config.themeColor || '#30A14E';
    const textColor = getContrastingTextColor(themeColor);

    iframeDoc.open();
    iframeDoc.write(`
    <html>
      <head>
        <style>
          /* Simple reset */
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; height: 100vh; display: flex; flex-direction: column; overflow: hidden; }
          .chat-container { width: 100%; height: 100%; display: flex; flex-direction: column; background-color: white; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); }
          .chat-header { background-color: ${themeColor}; color: ${textColor}; padding: 16px; border-top-left-radius: 10px; border-top-right-radius: 10px; display: flex; justify-content: space-between; align-items: center; }
          .chat-header h3 { font-size: 18px; font-weight: bold; }
          .chat-header button { background: none; border: none; color: ${textColor}; font-size: 24px; cursor: pointer; opacity: 0.8; }
          .chat-header button:hover { opacity: 1; }
          .message-list { flex-grow: 1; padding: 16px; overflow-y: auto; }
          .message { display: flex; margin-bottom: 12px; }
          .message.user { justify-content: flex-end; }
          .message-bubble { max-width: 80%; padding: 10px 14px; border-radius: 18px; }
          .message.model .message-bubble { background-color: #f1f1f1; color: #333; border-top-left-radius: 0; }
          .message.user .message-bubble { background-color: ${themeColor}; color: ${textColor}; border-top-right-radius: 0; }
          .message-content { font-size: 14px; }
          .chat-form { display: flex; padding: 16px; border-top: 1px solid #e0e0e0; }
          .chat-form input { flex-grow: 1; border: 1px solid #ccc; border-radius: 20px; padding: 10px 14px; font-size: 14px; }
          .chat-form input:focus { outline: none; border-color: ${themeColor}; }
          .chat-form button { background-color: ${themeColor}; color: ${textColor}; border: none; border-radius: 50%; width: 40px; height: 40px; margin-left: 10px; cursor: pointer; display: flex; align-items: center; justify-content: center; }
          .chat-form button:disabled { opacity: 0.5; }
          .loader {
            border: 3px solid #f3f3f3;
            border-top: 3px solid ${themeColor};
            border-radius: 50%;
            width: 20px;
            height: 20px;
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .powered-by { text-align: center; font-size: 10px; color: #aaa; padding: 8px; border-top: 1px solid #e0e0e0; }
        </style>
      </head>
      <body>
        <div class="chat-container">
          <div class="chat-header">
            <h3>${config.name || 'Chatbot'}</h3>
            <button id="close-btn">&times;</button>
          </div>
          <div class="message-list" id="message-list"></div>
          <div class="powered-by">Powered by Chatscribe</div>
          <form class="chat-form" id="chat-form">
            <input type="text" id="message-input" placeholder="Type a message..." autocomplete="off">
            <button type="submit" id="send-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 20px; height: 20px; color: ${textColor};">
                <path d="M22 2L11 13"></path>
                <path d="M22 2L15 22L11 13L2 9L22 2z"></path>
              </svg>
            </button>
          </form>
        </div>
      </body>
    </html>
  `);
    iframeDoc.close();

    const chatButton = document.createElement('button');
    chatButton.id = 'chatscribe-button';
    chatButton.style.position = 'fixed';
    chatButton.style.bottom = '20px';
    chatButton.style.right = '20px';
    chatButton.style.width = '60px';
    chatButton.style.height = '60px';
    chatButton.style.borderRadius = '50%';
    chatButton.style.backgroundColor = themeColor;
    chatButton.style.color = textColor;
    chatButton.style.border = 'none';
    chatButton.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
    chatButton.style.cursor = 'pointer';
    chatButton.style.zIndex = '9998';
    chatButton.style.display = 'flex';
    chatButton.style.alignItems = 'center';
    chatButton.style.justifyContent = 'center';
    chatButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  `;
    document.body.appendChild(chatButton);

    const toggleChat = (isOpen) => {
        if (isOpen) {
            iframe.style.width = '360px';
            iframe.style.height = 'min(70vh, 500px)';
            chatButton.style.display = 'none';
        } else {
            iframe.style.width = '0';
            iframe.style.height = '0';
            chatButton.style.display = 'flex';
        }
    };

    iframe.onload = () => {
        const messageList = iframeDoc.getElementById('message-list');
        const chatForm = iframeDoc.getElementById('chat-form');
        const messageInput = iframeDoc.getElementById('message-input');
        const sendBtn = iframeDoc.getElementById('send-btn');
        const closeBtn = iframeDoc.getElementById('close-btn');

        let history = [];
        let isResponding = false;

        const addMessage = (role, content) => {
            const messageEl = iframeDoc.createElement('div');
            messageEl.classList.add('message', role);

            const bubbleEl = iframeDoc.createElement('div');
            bubbleEl.classList.add('message-bubble');

            const contentEl = iframeDoc.createElement('p');
            contentEl.classList.add('message-content');
            contentEl.textContent = content;

            bubbleEl.appendChild(contentEl);
            messageEl.appendChild(bubbleEl);
            messageList.appendChild(messageEl);
            messageList.scrollTop = messageList.scrollHeight;
        };

        const showTypingIndicator = () => {
            const typingEl = iframeDoc.createElement('div');
            typingEl.classList.add('message', 'model');
            typingEl.id = 'typing-indicator';

            const bubbleEl = iframeDoc.createElement('div');
            bubbleEl.classList.add('message-bubble');

            const loaderEl = iframeDoc.createElement('div');
            loaderEl.classList.add('loader');

            bubbleEl.appendChild(loaderEl);
            typingEl.appendChild(bubbleEl);
            messageList.appendChild(typingEl);
            messageList.scrollTop = messageList.scrollHeight;
        };

        const removeTypingIndicator = () => {
            const typingEl = iframeDoc.getElementById('typing-indicator');
            if (typingEl) {
                typingEl.remove();
            }
        };

        if (config.introMessage) {
            history.push({ role: 'model', content: config.introMessage });
            addMessage('model', config.introMessage);
        }

        chatForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const messageText = messageInput.value.trim();
            if (!messageText || isResponding) return;

            const userMessage = { role: 'user', content: messageText };
            history.push(userMessage);
            addMessage('user', messageText);
            messageInput.value = '';
            isResponding = true;
            sendBtn.disabled = true;

            showTypingIndicator();

            try {
                const res = await fetch('/api/chat', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        history,
                        message: messageText,
                        url: config.url
                    }),
                });

                if (!res.ok) {
                    throw new Error('API response was not ok.');
                }

                const data = await res.json();
                const botResponse = { role: 'model', content: data.message || "Sorry, I couldn't get a response." };
                history.push(botResponse);
                removeTypingIndicator();
                addMessage('model', botResponse.content);

            } catch (error) {
                console.error('Chatscribe Error:', error);
                const errorMessage = { role: 'model', content: 'Sorry, I am having trouble connecting.' };
                history.push(errorMessage);
                removeTypingIndicator();
                addMessage('model', errorMessage.content);
            } finally {
                isResponding = false;
                sendBtn.disabled = false;
                messageInput.focus();
            }
        });

        closeBtn.addEventListener('click', () => toggleChat(false));
    };

    chatButton.addEventListener('click', () => toggleChat(true));

})();

