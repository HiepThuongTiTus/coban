import React from "react";
const Layout = () => {
  return (
    <div>
      <div className="container">
        <div className="item1 item-1">
        <h1>Làm Người Yêu Mình Nhé</h1>
          <p>Nếu Thoát ra là ĐỒNG Ý ❤️</p>
        </div>
      </div>
      <div className="tite">
            <a
              href="/chua"
              className="btn btn-outline-warning"
              role="button"
              aria-disabled="true"
            >
              OK nè ❤️
            </a>
      </div>
    </div>
  );
};
export default React.memo(Layout);
