import React, { useEffect } from "react";
import "./Sklad.css"
import { useState } from "react";



function Sklad() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()

    const [title, setTitle] = useState("");
    const [address, setAddress] = useState("");
    const [sklad, setSklad] = useState("");
    const [pom, setPom] = useState("");
    const [stellaj, setStellaj] = useState("");
    const [section, setSection] = useState("");
    const [jarus, setJarus] = useState("");
    const [jacheika, setJacheika] = useState("");

    const [searchParam] = useState(["title", "address", "sklad", "pom", "stellaj", "section", "jarus", "jacheika"]);

    useEffect(() => {
      fetch("Items.js")
        .then(res => res.json())
        .then(
          (result) => {
            // console.log(result)
            setIsLoaded(true);
            setItems(result);
          },

          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.

          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (


        <div className="storageWrap">
        <div className="searchArea">
            <div className="searchResults">


                <div className="group-page_field">
                    <div className="view-screen_field">
                        <p className="view-screen_field_text">Вид товаров</p>
                        <svg width="19" height="17" viewBox="0 0 19 17"
                            fill="none" xmlns="http://www.w3.org/2000/svg" className="view-screen_field_icon-active">
                            <rect width="5" height="5" fill="#928F8F"></rect>
                            <rect x="7" width="5" height="5" fill="#928F8F"></rect>
                            <rect x="14" width="5" height="5" fill="#928F8F"></rect>
                            <rect y="6" width="5" height="5" fill="#928F8F"></rect>
                            <rect x="7" y="6" width="5" height="5" fill="#928F8F"></rect>
                            <rect x="14" y="6" width="5" height="5" fill="#928F8F"></rect>
                            <rect y="12" width="5" height="5" fill="#928F8F"></rect>
                            <rect x="7" y="12" width="5" height="5" fill="#928F8F"></rect>
                            <rect x="14" y="12" width="5" height="5" fill="#928F8F"></rect>
                        </svg>
                        <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg"
                            className="view-screen_field_icon">
                            <rect width="19" height="5" fill="#D9D9D9"></rect>
                            <rect y="6" width="19" height="5" fill="#D9D9D9"></rect>
                            <rect y="12" width="19" height="5" fill="#D9D9D9"></rect>
                        </svg>
                    </div>
                    <div className="items">



                        {items.map(item => (

<div key={item.id} className="item" style={{width: '200px'}}>
<div className="for_item" style={{maxWidth: '200px', height: '140px'}}>
    <a href={item.link}>
        <img
            className="for_item-image"
            src="is_image.png"
            alt="" style={{width: '200px', height: '140px'}} />
            </a>
            <svg width="19" height="16"
                viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="favorites_icon">
        <path
            d="M0 5.26362C0 8.97604 3.41541 12.6275 8.81118 15.7647C9.01208 15.878 9.29909 16 9.5 16C9.70091 16 9.98792 15.878 10.1984 15.7647C15.5846 12.6275 19 8.97604 19 5.26362C19 2.17865 16.6752 0 13.5755 0C11.8056 0 10.3706 0.766885 9.5 1.94336C8.64854 0.775599 7.19436 0 5.42447 0C2.32477 0 0 2.17865 0 5.26362ZM1.54028 5.26362C1.54028 2.94553 3.1858 1.40305 5.40534 1.40305C7.20393 1.40305 8.23716 2.42266 8.84945 3.29412C9.10775 3.6427 9.27039 3.73856 9.5 3.73856C9.72961 3.73856 9.87311 3.63399 10.1506 3.29412C10.8107 2.44009 11.8056 1.40305 13.5947 1.40305C15.8142 1.40305 17.4597 2.94553 17.4597 5.26362C17.4597 8.50545 13.6999 12 9.70091 14.4227C9.60524 14.4837 9.53827 14.5272 9.5 14.5272C9.46173 14.5272 9.39476 14.4837 9.30866 14.4227C5.3001 12 1.54028 8.50545 1.54028 5.26362Z"
            fill="#444444"></path>
    </svg>
    <div className="picture_icon">
        <form id="my_pictures-form_{item.id}" className="pictures-form"
            encType="multipart/form-data" method="post"
            action="{item.href}">
            <p><input type="file" name="file" id="file{item.id}"
                className="input input__file" />
                <label htmlFor="file{item.id}"
                    className="input__file-img">
                        <span className="input__file-icon-wrapper">
                            <img
                        className="input__file-icon"
                        src="def.png"
                        height="35px" width="35px" alt="Выбрать файл" />
                        </span>
                </label>
            </p>
        </form>
    </div>
</div>
<p className="item_title">{item.title}</p>
<div className="item_info"><button className="item_info_button">В корзину</button>
    <p className="item_info_availability">{item.quan}</p>
</div>
</div>

                            
                        ))}


                    </div>
                </div>
            </div>




          </div>
          <div className="storage">
            <div style={{position: 'absolute', left: '20px', top: '10px'}}>
                <svg width="15" height="25" viewBox="0 0 15 25"
                    fill="none" xmlns="http://www.w3.org/2000/svg" className="arrowBackIcon arrowNews">
                    <path
                        d="M0 12.5C0 12.86 0.153374 13.1912 0.444785 13.4505L12.592 24.6256C12.8681 24.8704 13.2055 25 13.6043 25C14.3865 25 15 24.4384 15 23.6895C15 23.3295 14.8466 22.9983 14.6012 22.7535L3.43558 12.5L14.6012 2.24654C14.8466 2.00173 15 1.68491 15 1.31048C15 0.561636 14.3865 0 13.6043 0C13.2055 0 12.8681 0.129608 12.592 0.388824L0.444785 11.5495C0.153374 11.8232 0 12.14 0 12.5Z"
                        fill="black"></path>
                </svg></div>
            <div className="storage-main-text">Склад</div>
            <div className="storage-text">содержание ячеек хранения</div>
            <div className="storage-unit">
                <div className="storage-unit-prefix">Поиск по Адресу хранения</div>
                <div className="storage-unit-container">
                    <div className="storage-unit-text"><input type="text" name="address" value={address} onChange={(e) => setAddress(e.target.value)}/></div><img className="storage-unit-arrow"
                        src="arrow-down.svg" alt="" />
                </div>
            </div>
            <div className="storage-unit">
                <div className="storage-unit-prefix">Склад</div>
                <div className="storage-unit-container">
                    <div className="storage-unit-text"><input type="text" name="sklad" value={sklad} onChange={(e) => setSklad(e.target.value)}/></div><img className="storage-unit-arrow"
                        src="arrow-down.svg" alt="" />
                </div>
            </div>
            <div className="storage-unit">
                <div className="storage-unit-prefix">Помещение</div>
                <div className="storage-unit-container">
                    <div className="storage-unit-text"><input type="text" name="pom" value={pom} onChange={(e) => setPom(e.target.value)}/></div><img className="storage-unit-arrow"
                        src="arrow-down.svg" alt="" />
                </div>
            </div>
            <div className="storage-unit">
                <div className="storage-unit-prefix">Стеллаж</div>
                <div className="storage-unit-container">
                    <div className="storage-unit-text"><input type="text" name="stellaj" value={stellaj} onChange={(e) => setStellaj(e.target.value)}/></div><img className="storage-unit-arrow"
                        src="arrow-down.svg" alt="" />
                </div>
            </div>
            <div className="storage-unit">
                <div className="storage-unit-prefix">Секция</div>
                <div className="storage-unit-container">
                    <div className="storage-unit-text"><input type="text" name="section" value={section} onChange={(e) => setSection(e.target.value)}/></div><img className="storage-unit-arrow"
                        src="arrow-down.svg" alt="" />
                </div>
                <div className="disabling-element" style={{position: 'absolute', inset: '0px', zIndex: '5'}}></div>
            </div>
            <div className="storage-unit">
                <div className="storage-unit-prefix">Ярус</div>
                <div className="storage-unit-container">
                    <div className="storage-unit-text"><input type="text" name="jarus" value={jarus} onChange={(e) => setJarus(e.target.value)}/></div><img className="storage-unit-arrow"
                        src="arrow-down.svg" alt="" />
                </div>
            </div>
                <div className="storage-unit">
                    <div className="storage-unit-prefix">Ячейка</div>
                    <div className="storage-unit-container">
                        <div className="storage-unit-text"><input type="text" name="jacheika" value={jacheika} onChange={(e) => setJacheika(e.target.value)}/></div><img className="storage-unit-arrow"
                            src="arrow-down.svg" alt="" />
                    </div>
                </div>
                <button className="storage__submit">Поиск</button>
                <div className="blur-fon" style={{width: '100%', height: '100%', position: 'absolute', display: 'none', zIndex: '5'}}>
                </div>
            </div>
        </div>

      );
    }
  }




export default Sklad;