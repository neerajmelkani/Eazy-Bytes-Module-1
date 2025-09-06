let ws;let username='';
document.getElementById('loginBtn').addEventListener('click', ()=>{
  username = document.getElementById('username').value.trim() || 'Guest'+Math.floor(Math.random()*1000);
  startWebSocket();
});
function startWebSocket(){
  ws = new WebSocket('ws://localhost:8080/chat');
  ws.onopen = ()=> addSystem('Connected to chat server as '+username);
  ws.onmessage = (ev)=> addMessage(ev.data);
  ws.onclose = ()=> addSystem('Disconnected from server');
}
document.getElementById('sendBtn').addEventListener('click', ()=>{
  const msg = document.getElementById('messageInput').value.trim();
  if(!msg || !ws || ws.readyState!==1) return;
  const payload = JSON.stringify({user: username, text: msg});
  ws.send(payload);
  document.getElementById('messageInput').value='';
});
function addMessage(text){ const el=document.getElementById('messages'); const p=document.createElement('div'); p.textContent = text; p.style.padding='6px 0'; el.appendChild(p); el.scrollTop = el.scrollHeight; }
function addSystem(t){ const el=document.getElementById('messages'); const p=document.createElement('div'); p.textContent='* '+t; p.style.opacity=0.7; el.appendChild(p); el.scrollTop = el.scrollHeight; }