import "./featuredInfo.css"
import {
    ArrowDownward,ArrowUpward
  } from "@material-ui/icons";
export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div class="featuredItem">
            <span class="featuredTitle">revenue</span>
            <div class="featuredMoneyContainer">
                <span class="featuredMoney">$2,415</span>
                
                <span class="featuredMoneyRate">-11.4 <ArrowDownward className="featuredIcon negative"/>  </span>
            </div>
            <span class="featuredSub">Compared to last month</span>
            </div>
            <div class="featuredItem">
            <span class="featuredTitle">Sales</span>
            <div class="featuredMoneyContainer">
                <span class="featuredMoney">$4,415</span>
                
                <span class="featuredMoneyRate">-1.4 <ArrowDownward className="featuredIcon negative"/>  </span>
            </div>
            <span class="featuredSub">Compared to last month</span>
            </div>
            <div class="featuredItem">
            <span class="featuredTitle">Cost</span>
            <div class="featuredMoneyContainer">
                <span class="featuredMoney">$2,215</span>
                
                <span class="featuredMoneyRate">+2.4 <ArrowUpward className="featuredIcon"/>  </span>
            </div>
            <span class="featuredSub">Compared to last month</span>
            </div>
        </div>
    )
}
