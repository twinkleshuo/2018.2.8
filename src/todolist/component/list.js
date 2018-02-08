import React,{Component} from 'react';

class List extends Component{
	constructor(props){
		super(props);
		this.state = {
			ondb:false,
			ctxt:this.props.txt
		}
	}
	
	
    checked = () => {
        let {changeChecked,id} = this.props;
        changeChecked(id);
    }
    rm = () => {
        let {rm,id} = this.props;
        rm(id);
    }
	
	db = () => {
        this.setState({
            ondb : true
        },()=>{
            
            this.refs.nn.selectionStart = this.refs.nn.value.length;
            this.refs.nn.focus();
        })
    }
	
	blur = ()=>{
		let {ctxt} = this.state;
		let {txt,changeVal,id} = this.props;
		if(ctxt){
			changeVal(id,ctxt);
			this.setState({ondb:false});
		}else{
			this.setState({ondb:false,ctxt:txt});
		}
	}
	
	change = (ev) =>{
		this.setState({
			ctxt:ev.target.value
		})
	}
	
	down = (ev) =>{
		if(ev.keyCode==13){
			this.blur();
		}
	}
    render(){
        let {txt,checked} = this.props;
        let classN = checked?'completed':'';
        let {ondb,ctxt} = this.state;
        if(ondb){
        	classN += ' editing';
        }
        return (
            <li className={classN}>
                <div className="view">
                    <input 
                        className="toggle" 
                        type="checkbox" 
                        checked={checked} 
                        onChange = {this.checked}
                    />
                    <label>{txt}</label>
                    <button 
                        className="destroy"
                        onClick = {this.rm}
                    ></button>
                </div>
                <input
                	className="edit"
                	value={ctxt}
                	onBlur={this.blur}
                	onChange={this.change}
                	ref="nn"
                	onKeyDown = {this.down}
                />
            </li>
        )
    }
}
export default List;
