import {Component} from 'react';
import List from './List';
class Createcrud extends Component {

       constructor(props){
           super(props);
           this.state={
               dir: [],
               item: {
                   name: "",
                   phone: "",
               },
               isEditing: false,
               temp_id:null

               
           }
            this.handleChange = this.handleChange.bind(this)
            this.add = this.add.bind(this)
            this.delete =this.delete.bind(this)
            this.edit = this.edit.bind(this)
            this.Update = this.Update.bind(this)

       }

view(item){
    alert(
        `
        name= ${item.name}
        phone=${item.phone}
        `
    )

}

       add(event){
           event.preventDefault()
           let dir = this.state.dir;
           dir.push(this.state.item)
           this.setState( {dir:dir, item: {name:"", phone:""} })
           console.log(this.state.dir)
       }
       delete(index){
           let dir = this.state.dir;
           dir.splice(index, 1)
           this.setState( {dir:dir} )
       }
       edit (index){
           let item = this.state.dir[index]
           this.setState({item:item, isEditing:true, temp_id:index })
       }
       Update(e){
           e.preventDefault()
           let dir = this.state.dir;
           dir[this.state.temp_id]=this.state.item
           this.setState({
               dir:dir,
               item:{
                name:"",
                phone:""
               },
               isEditing: false,
               temp_id:null

           })
       }

       handleChange(event){
            const name = event.target.name;
            const value = event.target.value;

            let item =this.state.item;
            item[name] = value;
            this.setState ( {item: item})
       }

    render() { 
        return (
            
            <div className=' crud col-md-6'>
                  <h3>Crud Application</h3>
              <form method='POST' onSubmit={this.state.isEditing ? this.Update : this.add}>
                <div className='mb-2'>
                <input type='text' name='name' placeholder='Enter Your Name' className='form-control' 
                value={this.state.item.phone.name}
                onChange={this.handleChange}
                 >

                </input>
                </div>
                <div className='mb-2'>
                <input type='text' name='name' placeholder='Enter Your Name' className='form-control' >

                </input>
                </div>
                <div className='mb-2'>
                <button className='btn btn-danger' type='submit' >

                {this.state.isEditing ? "Update" : "Save"}

                </button>
                </div>
              </form>
              <List 
                  dir= {this.state.dir}
                  delete={this.delete}
                  edit = {this.edit}
                  view= {this.view}
              />
            </div>
        )
    }
}
 
export default Createcrud;