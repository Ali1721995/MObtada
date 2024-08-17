import React from 'react'

const CreatorWidget = () => {
  return (
    <>
      <div
        className="my-3"
        style={{ backgroundColor: "#002f79", height: "3px", width: "100%" }}
      ></div>
      <div className="titlei">
        <a
          className="text-black text-decoration-none "
          href="https://www.mobtada.com/choose-editors"
        >
          <h2 class="h4">اختيار المحررين</h2>
        </a>
      </div>
      <div className="wrapper bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-4  my-4">
              <div className="img rounded-circle">
                <img
                  src="https://www.mobtada.com/image/66/66/2024/08/17238733730.jpg"
                  alt="editor1"
                  className="card-img-top img-fluid rounded-circle "
                />
              </div>
            </div>
            <div className="col-sm-8 my4">
              <h3 className="cardTitle h5 mt-2">
                <a
                  className="text-black"
                  href="/choose-editors/1425500/لحظة-سقوط-طائرة-خلال-معرض-جوي-بفرنسا-فيديو"
                >
                  لحظة سقوط طائرة خلال معرض جوي بفرنسا (فيديو)
                </a>
              </h3>
              <span>- كريم شعبان</span>
              <br />
              <span>2024-08-17 08:48</span>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4  my-4">
              <div className="img rounded-circle">
                <img
                  src="https://www.mobtada.com/image/66/66/2024/08/17238745770.jpg"
                  alt="editor1"
                  className="card-img-top img-fluid rounded-circle "
                />
              </div>
            </div>
            <div className="col-sm-8 my4">
              <h3 className="cardTitle h5 mt-2">
                <a
                  className="text-black"
                  href="/choose-editors/1425508/سقوط-مرعب-لسائح-روسي-في-قرية-الموتى"
                >
                  سقوط مرعب لسائح روسي في قرية الموتى
                </a>
              </h3>
              <span>- أحمد عبد الرؤوف</span>
              <br />
              <span>2024-08-17 08:48</span>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4  my-4">
              <div className="img rounded-circle">
                <img
                  src="https://www.mobtada.com/image/66/66/2024/08/17237878270.jpeg"
                  alt="editor1"
                  className="card-img-top img-fluid rounded-circle "
                />
              </div>
            </div>
            <div className="col-sm-8 my4">
              <h3 className="cardTitle h5 mt-2">
                <a
                  className="text-black"
                  href="/choose-editors/1425266/تحذير-من-كوارث-طبيعية-في-اليابان-بسبب-إعصار-أمبيل"
                >
                  تحذير من كوارث طبيعية في اليابان بسبب إعصار أمبيل لحظة
                </a>
              </h3>
              <span>صطفى فراج</span>
              <br />
              <span>2024-08-16 08:58</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreatorWidget