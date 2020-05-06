import React, { Component } from 'react';
import _ from "lodash";

class Pagination extends Component {
    state = { 
      
     }
     
    render() { 
      console.log(this.props.total,this.props.pageSize)
      const noOfPages = Math.ceil(this.props.total/this.props.pageSize);
      var page = _.range(1, noOfPages+1)
      const dd = _.range(0, 0)

      if(this.props.total<=this.props.pageSize){
        page= dd
        console.log(page)
      }
      
     
      
      
        return ( <div>
            <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    
        {page.map(m1=><li className={this.props.selectedPage === m1 ? 'page-item active':'page-item'} onClick={() =>this.props.handlePageSelect(m1)}><a class="page-link" href="#" >{m1}</a></li>)}
    
    
   
  </ul>
</nav>



    


        </div> );
    }
}
 
export default Pagination;