import React from "react";
const Chao = () => {
  return (
    <div>
      <div className="container1">
        <div className="item">
          <p>Chào mừng bạn đã đến với câu hỏi trả lời nhanh của chúng tôi!</p>
        </div>
        <div className="tite">
            <a
              href="/layout"
              className="btn btn-outline-warning"
              role="button"
              aria-disabled="true"
            >
              Click me! 
            </a>
        </div>
        </div>
    </div>
  );
};
export default React.memo(Chao);
