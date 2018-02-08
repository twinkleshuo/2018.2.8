import React,{Component} from 'react';
import './css/index.css';
import HeadM from './component/head';
import List from './component/list';
class Index extends Component {
    constructor(){
        super();
        this.state = {
            arr:[
            ]
        }
    }

    addData = (newData) => {
        let {arr} = this.state;
        let arr2 = arr.concat();
        arr2.unshift(newData);
        this.setState({
            arr:arr2
        });
    }

    changeChecked = (id) => {
        let {arr} = this.state;
        let arr2 = arr.concat();
        arr2.forEach(e => {
            if(e.id == id){
                e.checked = !e.checked
            }
        });
        this.setState({
            arr:arr2
        });
    }
 
    rm = (id) => {
        let {arr} = this.state;
        let arr2 = arr.concat();
        arr2 = arr2.filter(e=>{
            return e.id != id
        });
        this.setState({
            arr:arr2
        });
    }

    all = (ev) => {
        let {checked} = ev.target;
        let {arr} = this.state;
        let arr2 = arr.concat();
        arr2.forEach(e => {
            e.checked = checked
        });
        this.setState({
            arr:arr2
        })
    }
		
	changeVal = (id,newVal) =>{
		let {arr} = this.state;
		let arr2 = arr.concat();
		arr2.forEach(e=>{
			if(e.id==id){
				e.txt = newVal
			}
		});
		this.setState({
			arr:arr2
		});
	}
    render(){

        let {arr} = this.state;
        let all = arr.length?arr.every(e=>e.checked):false;
        let len = arr.length; //1
        let list = arr.map((e,i)=>{
            if(e.checked)len--;
            return <List {...{
                key:i,
                txt:e.txt,
                checked:e.checked,
                id:e.id,
                changeChecked:this.changeChecked,
                rm:this.rm
            }}/>
        });

        return (
            <section className="todoapp">
                <div>
                    <HeadM addData={this.addData}/>
                    <section className="main">
                        <input 
                            className="toggle-all" 
                            type="checkbox" 
                            checked={all}
                            onClick = {this.all}
                        />
                        <ul className="todo-list">
                            {list}
                        </ul>

                    </section>
                </div>
            </section>
        )
    }
}

export {Index};

