# P1
- React-router
  - BrowserRouter: tạo ra cơ chế định tuyến cho app đc bọc bên trong
  - Link: chuyển đến một link k cần reload trang:
  - Switch (v5) -> routes (v6):
  - component, render (v5) -> element(v6):
  - exact(v5) -> v6 bỏ:
  - useHistory(v5) -> useNavigate(v6): điều hướng
  - go, goBack, goForward, history.push -> navigate

bỏ layout vào index.js, trong layout có BrowserRouter, component routes có Switch, route

layout lồng route bọc header, switch, footer nghĩa là khi vào switch thì vẫn render header, footer