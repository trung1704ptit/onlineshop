import { FILTER } from "@utils/constants";
import { Pagination } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ProductPagintation({ total }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(FILTER.showItems[0].value);
  const router = useRouter();

  const handleChangePage = (value) => {
    setCurrentPage(value);
    const query = router.query;
    const pathname = router.pathname;

    var newQuery = new URLSearchParams({
      ...query,
      page: value,
    });

    var url = `${pathname}?${newQuery.toString()}`;
    router.push(url);
  };

  useEffect(() => {
    const { query } = router;
    const { page, pageSize } = query;
    if (page) {
      setCurrentPage(parseInt(page));
    }
    if (pageSize) {
      setPageSize(parseInt(pageSize))
    }
  }, [router]);

  return (
    <Pagination
      defaultCurrent={1}
      total={total}
      pageSize={pageSize}
      onChange={handleChangePage}
      value={currentPage}
    />
  );
}
