


function Color(props){
    return(
      <div>
        <h5>{props.colorList.name}</h5>
        <hr/>
        <h6>{props.colorList.idNum}</h6>
      </div>
    );
  }
  
  
  function Main(props){
    return(
      <section>
        <Color colorList={props.colorList}/>
        <div>{props.title}</div>
        <p>{props.content}</p>
      </section>
    );
    
      
  }
  
  
  const colorPage ={
    title:"보라색이 좋아요",
    content:"보라색 바이올렛 퍼플 핑크팬더 ...",
    colorList:{
    name:"Purple님",
    idNum:"no.100000000"
    }
  }
  
  
  ReactDOM.render(
    <Main
        colorList={colorPage.colorList}
        title={colorPage.title}
        content={colorPage.content}
      />,
    document.getElementById('root')
  );