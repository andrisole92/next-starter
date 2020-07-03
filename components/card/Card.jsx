export default class Card extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>
      <div className='c'>
        <div className='c_img'>

        </div>
        <div className='c_stats'>

        </div>
        <div className='c_att c_circ'>

        </div>

        <div className='c_def c_circ'>

        </div>
      </div>
      <style jsx global>{`
        .c {
          margin-left: 100px;
          display: flex;
          flex-direction: column;
          background: white;
          width: 200px;
          height: 300px;
          box-shadow: 0 0px 2px black;
          border-radius: 8px;
          position: relative;
        }
        
        .c_img {
          background: url('https://storage.googleapis.com/bit-games/mnstr.png');
          height: 50%;
          background-size: cover;
          margin: 0;
          background-repeat: no-repeat;
          object-fit: contain;
          border-radius: 8px 8px 0 0;
        }
        
        .c_circ {
          background: white;
          position: absolute;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          box-shadow: 0 0px 2px black;
        }
        
        .c_att {
          bottom: -20px;
          right: -20px;
        }
        
        
        .c_def {
          bottom: -20px;
          left: -20px;
        }
      `}</style>
    </div>;
  }
}
