import { useState} from "react";
import Link from 'next/link'
import Search from "../search.json";
import { slugify } from "../utils";

export default function Sidebar() {
  const [search, setSearch]= useState()
  function findSerach(value) {
   
    setSearch(value.target.value)
  }
 
  return (
    <div className="col-lg-4">

      <div className="card mb-4">
        <div className="card-header">Search</div>
        <div className="card-body">
          <div className="input-group">
            <input onChange={findSerach} className="form-control" type="text" placeholder="Enter search term..." aria-label="Enter search term..." aria-describedby="button-search" />
            <Link href={{ pathname: '/Search', query: { q: search?.toLowerCase() } }}> 
              <a className="btn btn-primary" id="button-search">Go!</a>
            </Link>
          </div>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-header">Categories</div>
        <div className="card-body">
          <div className="row">
            <div className="col-sm-10">
              <ul className="list-unstyled mb-0">
               
                {
                  Search?.map(
                    post => {
                      return post.frontmatter.categories.map(
                      item => {
                        const slug = slugify(item)
                       
                        return <Link key={item} href={`/category/${slug}`}>
                          <a> <li> {item} </li></a>
                        </Link>
                      }
                    )
                  
                }
                  )
                }
              </ul>
            </div>
           
          </div>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-header">Side Widget</div>
        <div className="card-body">You can put anything you want inside of these side widgets. They are easy to use, and feature the Bootstrap 5 card component!</div>
      </div>
    </div>
  )
}