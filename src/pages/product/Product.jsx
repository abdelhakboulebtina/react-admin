import { Link } from "react-router-dom"
import Chart from "../../components/chart/Chart"
import "./product.css"
import {productData} from "../../dummyData"
import { Publish } from "@material-ui/icons"
export default function Product() {
    return (
        <div className="product">
            <div class="productTitleContainer">
                <h1 class="productTitle">Product</h1>
                <Link to="/newProduct">
                <button class="productAddButton">Create</button>
                </Link>
            </div>  
            <div class="productTop">
                <div class="productTopLeft"><Chart data={productData} dataKey="Sales"  title="Sales Peformance"/> </div>
                <div class="productTopRight">
                    <div class="productInfoTop">
                        <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" class="productInfoImg"/>
                    <span class="productName">Apple AirPods</span>
                    </div>
                    <div class="productInfoBottom">
                        <div class="productInfoItem">
                            <span class="productInfoKey">id:</span>
                            <span class="productInfoValue">123</span>
                        </div>
                        <div class="productInfoItem">
                            <span class="productInfoKey">Sales:</span>
                            <span class="productInfoValue">5123</span>
                        </div>
                        <div class="productInfoItem">
                            <span class="productInfoKey">Active:</span>
                            <span class="productInfoValue">yes</span>
                        </div>
                        <div class="productInfoItem">
                            <span class="productInfoKey">in Stock</span>
                            <span class="productInfoValue">no</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="productBottom">
                <form  class="productForm">
                    <div class="productFormLeft">
                        <label >Product Name</label>
                        <input type="text" placeholder="Apple Airpod" class="appleAirPod"/>
                        <label >In Stock</label>
                        <select name="inStock" id="inStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label >Status</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div class="productFormRight">
                        <div class="productUpload">
                            <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" class="poductUploadImg"/>
                            <label for="file"><Publish/></label>
                            <input type="file"  id="file" style={{display:"none"}}/>
                        </div>
                        <button class="productButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
