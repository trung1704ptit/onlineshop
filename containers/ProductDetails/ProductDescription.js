import { Card, Tabs, Typography, Divider } from "antd";
import styles from "@styles/product.module.scss";
import ReviewItem from "@components/Review/ReviewItem";
import ProductReviewForm from "./ProductReviewForm";

const { Title } = Typography;

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const ProductDescription = () => (
  <Card className="mt-4 p-3">
    <div className={styles["product-description"]}>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="DESCRIPTION" key="1">
          <div className={styles["content"]}>
            <div> <h2>Description</h2> <p>The Aspire 5 is a compact laptop in a thin case with a metal cover, a high-quality Full HD IPS display and a rich set of interfaces. Thanks to its powerful components, the laptop can handle resource-intensive tasks perfectly and is also suitable for most games.</p> <p>Key Features:</p> <ul> <li>slim body with metal cover</li> <li>latest Intel Core i5-1135G7 processor (4 cores / 8 threads)</li> <li>8GB DDR4 RAM and fast 512GB PCIe SSD</li> <li>NVIDIA GeForce MX350 2GB GDDR5 graphics card</li> <li>backlit keyboard, touchpad with gesture support</li> </ul></div>
          </div>
        </TabPane>
        <TabPane tab="SPECIFICATION" key="2">
          <table>
            <tr>
              <th>Brands</th>
              <td>Frito Lay, Oreo, Welch's</td>
            </tr>
            <tr>
              <th>Color</th>
              <td>Black</td>
            </tr>
            <tr>
              <th>Size</th>
              <td>22</td>
            </tr>
          </table>
        </TabPane>
        <TabPane tab="REVIEW" key="3">
          {/* Review List */}
          <div>
            <ReviewItem />
            <Title level={4}>Add a review</Title>
            <Divider />
            <ProductReviewForm />
          </div>
        </TabPane>
      </Tabs>
    </div>
  </Card>
);

export default ProductDescription;
