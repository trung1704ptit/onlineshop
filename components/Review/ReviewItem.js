import { Rate, Typography, Avatar } from "antd";

const {  Text } = Typography;


export default function ReviewItem() {
  return (
    <div className="d-flex justify-content-start mb-3">
      <Avatar
        src="/images/avatar.jpeg"
        alt="avatar-img"
        className="rounded-circle"
        size={60}
      />

      <div className="ms-3">
        <Rate
          allowHalf
          defaultValue={4}
          disabled={true}
          style={{ fontSize: 15 }}
        />
        <div>
          <strong>admin</strong> - <Text type="secondary">May 1, 2021</Text>
        </div>
        <div>
          <Text>
            Sed perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium.
          </Text>
        </div>
      </div>
    </div>
  );
}