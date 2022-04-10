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
            <p>
              Quisque varius diam vel metus mattis, id aliquam diam rhoncus.
              Proin vitae magna in dui finibus malesuada et at nulla. Morbi elit
              ex, viverra vitae ante vel, blandit feugiat ligula. Fusce
              fermentum iaculis nibh, at sodales leo maximus a. Nullam ultricies
              sodales nunc, in pellentesque lorem mattis quis. Cras imperdiet
              est in nunc tristique lacinia. Nullam aliquam mauris eu accumsan
              tincidunt. Suspendisse velit ex, aliquet vel ornare vel, dignissim
              a tortor.
            </p>
            <p>
              Morbi ut sapien vitae odio accumsan gravida. Morbi vitae erat
              auctor, eleifend nunc a, lobortis neque. Praesent aliquam
              dignissim viverra. Maecenas lacus odio, feugiat eu nunc sit amet,
              maximus sagittis dolor. Vivamus nisi sapien, elementum sit amet
              eros sit amet, ultricies cursus ipsum. Sed consequat luctus
              ligula. Curabitur laoreet rhoncus blandit. Aenean vel diam ut arcu
              pharetra dignissim ut sed leo. Vivamus faucibus, ipsum in
              vestibulum vulputate, lorem orci convallis quam, sit amet
              consequat nulla felis pharetra lacus. Duis semper erat mauris, sed
              egestas purus commodo vel.
            </p>
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
