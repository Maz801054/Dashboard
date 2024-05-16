import React from "react";
import "../App.css";

const ChetBox = () => {
  return (
    <div className="p-3 my-3 mx-3 mainSetH">
      <h6 className="mt-2 mb-4 fw-bold">Event</h6>
      <div className="HWsetup">
        <div className="d-flex gap-5 align-items-center">
          <div className="imgSetion">
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/35af6a41332353.57a1ce913e889.jpg"
              class="img-thumbnail imgSE"
              alt="..."
            />
          </div>
          <div className="d-flex align-items-center" style={{ gap: "120px" }}>
            <div className="left">
              <h5>Wade Warren</h5>
              <i
                class="fa-solid fa-cake-candles me-2"
                style={{ color: "#FFD43B" }}
              ></i>
              <span>Birthday</span>.<span>Today</span>
            </div>
            <div className="right">
              <button type="button" class="btn btn-primary btn-sm">
                Wish
              </button>
            </div>
          </div>
        </div>
        <div className="d-flex gap-5 align-items-center my-3">
          <div className="imgSetion">
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/35af6a41332353.57a1ce913e889.jpg"
              class="img-thumbnail imgSE"
              alt="..."
            />
          </div>
          <div className="d-flex align-items-center" style={{ gap: "120px" }}>
            <div className="left">
              <h5>Wade Warren</h5>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-balloon-heart me-2"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063q.068.062.132.129.065-.067.132-.129c3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3 3 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398"
                />
              </svg>
              <span>Joining Us</span>.<span>Today</span>
            </div>
            <div className="right">
              <button type="button" class="btn btn-primary btn-sm">
                Wish
              </button>
            </div>
          </div>
        </div>
        <div className="d-flex gap-5 align-items-center my-3">
          <div className="imgSetion">
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/35af6a41332353.57a1ce913e889.jpg"
              class="img-thumbnail imgSE"
              alt="..."
            />
          </div>
          <div className="d-flex align-items-center" style={{ gap: "120px" }}>
            <div className="left">
              <h5>Wade Warren</h5>
              <i
                class="fa-solid fa-bag-shopping me-2"
                style={{ color: "#FFD43B" }}
              ></i>
              <span>Work Anniversary</span>.<span>7 saptember,2022</span>
            </div>
            <div className="right">
              <button type="button" class="btn btn-primary btn-sm">
                Wish
              </button>
            </div>
          </div>
        </div>
        <div className="d-flex gap-5 align-items-center my-3">
          <div className="imgSetion">
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/35af6a41332353.57a1ce913e889.jpg"
              class="img-thumbnail imgSE"
              alt="..."
            />
          </div>
          <div className="d-flex align-items-center" style={{ gap: "120px" }}>
            <div className="left">
              <h5>Wade Warren</h5>
              <i class="fa-solid fa-house me-2"></i>
              <span>Birthday</span>.<span>Today</span>
            </div>
            <div className="right">
              <button type="button" class="btn btn-primary btn-sm">
                Wish
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChetBox;
