import React, { useState } from 'react';
import Background from './Background';
import ListItem from './ListItem';
import Logo from './Logo';
import PageBtn from './PageBtn';

const Page03 = ({ show }) => {
  const [popup, setPopup] = useState('');

  return (
    <>
      <main id='page10' className='main--container'>
        <Background name='czasteczka_tlo_03.jpg' />
        <div className='page three'>
          <Logo />
          <div className='box'>
            <div className='box col--15--1'>
              <img
                src={process.env.PUBLIC_URL + '/img/strzalka_lamana.svg'}
                alt='headline'
              />
              <div className='box row--20--1'>
                <h1>Elugel wspomaga przy:</h1>

                <div className='box list'>
                  <img
                    src={process.env.PUBLIC_URL + '/img/zielone_koleczko.svg'}
                    alt='headline'
                  />
                  <ListItem
                    func={setPopup}
                    popup={popup}
                    text='   Stomatopatiach protetycznych'
                    number='01'
                  />

                  <img
                    src={process.env.PUBLIC_URL + '/img/zielone_koleczko.svg'}
                    alt='headline'
                  />

                  <ListItem
                    func={setPopup}
                    popup={popup}
                    text='Po zabiegach chirurgicznych'
                    number='02'
                  />

                  <img
                    src={process.env.PUBLIC_URL + '/img/zielone_koleczko.svg'}
                    alt='headline'
                  />

                  <ListItem
                    func={setPopup}
                    popup={popup}
                    text='  Po założeniu szwów'
                    number='03'
                  />

                  <img
                    src={process.env.PUBLIC_URL + '/img/zielone_koleczko.svg'}
                    alt='headline'
                  />

                  <ListItem
                    func={setPopup}
                    popup={popup}
                    text='Po zabiegach implantologicznych'
                    number='04'
                  />

                  <img
                    src={process.env.PUBLIC_URL + '/img/zielone_koleczko.svg'}
                    alt='headline'
                  />

                  <ListItem
                    func={setPopup}
                    popup={popup}
                    text='Po zabiegach periodontologicznych'
                    number='05'
                  />

                  <img
                    src={process.env.PUBLIC_URL + '/img/zielone_koleczko.svg'}
                    alt='headline'
                  />
                  <ListItem
                    func={setPopup}
                    popup={popup}
                    text='Stomatopatiach protetycznych'
                    number='06'
                  />

                  <img
                    src={process.env.PUBLIC_URL + '/img/zielone_koleczko.svg'}
                    alt='headline'
                  />

                  <ListItem
                    func={setPopup}
                    popup={popup}
                    text='Zapaleniu przyzębia'
                    number='07'
                  />

                  <img
                    src={process.env.PUBLIC_URL + '/img/zielone_koleczko.svg'}
                    alt='headline'
                  />

                  <ListItem
                    func={setPopup}
                    popup={popup}
                    text='Zapaleniu dziąseł'
                    number='08'
                  />

                  <img
                    src={process.env.PUBLIC_URL + '/img/zielone_koleczko.svg'}
                    alt='headline'
                  />

                  <ListItem
                    func={setPopup}
                    popup={popup}
                    text='Stomatopatiach protetycznych'
                    number='09'
                  />

                  <img
                    src={process.env.PUBLIC_URL + '/img/zielone_koleczko.svg'}
                    alt='headline'
                  />

                  <ListItem
                    func={setPopup}
                    popup={popup}
                    text=' Uszkodzeniach termicznych i mechanicznych błony śluzowej'
                    number='10'
                  />

                  <img
                    src={process.env.PUBLIC_URL + '/img/zielone_koleczko.svg'}
                    alt='headline'
                  />

                  <ListItem
                    func={setPopup}
                    popup={popup}
                    text=' Wrażliwych dziąsłach'
                    number='11'
                  />

                  <img
                    src={process.env.PUBLIC_URL + '/img/zielone_koleczko.svg'}
                    alt='headline'
                  />

                  <ListItem
                    func={setPopup}
                    popup={popup}
                    text='U pacjentów, którzy nie są w stanie szczotkować zębów
                    (hospitalizowani, obłożnie chorzy)'
                    number='12'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='box footer four'>
            <PageBtn show={show} icon='back_normal' page='page09' />
            <div className=''></div>
            <div className=''></div>
            <PageBtn show={show} icon='dalej_normal' page='page11' />
          </div>
        </div>
      </main>
    </>
  );
};

export default Page03;
