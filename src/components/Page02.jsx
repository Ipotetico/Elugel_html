import React from 'react';
import Background from './Background';
import Logo from './Logo';
import PageBtn from './PageBtn';

const Page02 = ({ show }) => {
  return (
    <>
      <main id='page02' className='main--container'>
        <Background />
        <div className='page two'>
          <Logo />
          <div className='box col--75--25'>
            <div className='box row--15--1--15'>
              <img
                src={process.env.PUBLIC_URL + '/img/miejscowa_antyseptyka.svg'}
                alt='headline'
              />

              <div className='box three--cols'>
                <div className='box row--25--1'>
                  <img
                    src={process.env.PUBLIC_URL + '/img/molekula_01_3D.gif'}
                    alt='chlorhexsydyna'
                  />

                  <img
                    className='chevron'
                    src={process.env.PUBLIC_URL + '/img/o_chlorchex.svg'}
                    alt='chlorcheksydyna'
                  />
                </div>

                <div className='box row--1--15'>
                  <img
                    src={process.env.PUBLIC_URL + '/img/tubka.png'}
                    alt='Elugel logo'
                  />
                  <p>
                    <sup>(1)</sup> Miśkiewicz A., Chlorhexidine – an insight
                    into oral stomatopathy treatment in the face of increasing
                    drug resistance in Candida albicans. MS, 2014, 4 (260),
                    84-90
                  </p>
                </div>

                <div className='box row--25--1'>
                  <img
                    src={process.env.PUBLIC_URL + '/img/molekula_02_3D.gif'}
                    alt='molecula 3D'
                  />

                  <img
                    className='chevron'
                    src={process.env.PUBLIC_URL + '/img/o_glicerolu.svg'}
                    alt='glicerol'
                  />
                </div>
              </div>
              <div className='box footer three'>
                <PageBtn show={show} icon='back_normal' page='page01' />
                <h1 className='green--head'>bez dodatku alkoholu</h1>
                <PageBtn show={show} icon='dalej_normal' page='page03' />
              </div>
            </div>
            <div className='box three--rows'>
              <div className='box'>
                <img
                  src={process.env.PUBLIC_URL + '/img/protetyka.svg'}
                  alt='protetyka'
                />
              </div>
              <div className='box'>
                <img
                  src={process.env.PUBLIC_URL + '/img/periodontologia.svg'}
                  alt='protetyka'
                />
              </div>
              <div className='box'>
                <img
                  src={process.env.PUBLIC_URL + '/img/chirurgia.svg'}
                  alt='protetyka'
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Page02;
