const blogList = [
  {
    id: 1,
    title: "Nextjs 쓰는 법",
    content: "Nextjs는 좋습니다",
    readTime: 1,
    writer: "TXMAY",
  },
  {
    id: 2,
    title: "Nextjs 장점",
    content: "귀찮은 거 다 해줌",
    readTime: 2,
    writer: "TXMAY",
  },
];

export default function handler(req, res) {
  res.json(blogList);
}
