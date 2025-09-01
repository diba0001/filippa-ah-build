export async function generateStaticParams() {
  return [
    { projectId: 'YAS_WINTER_25' },
    { projectId: 'VERO_MODA_COL.5_AW24' },
    { projectId: 'YAS_SS5' },
    { projectId: 'MAMALICIOUS_SS6' },
    { projectId: 'YAS_SS6' },
    { projectId: 'YAS_A25' },
    { projectId: 'YAS_AW2' },
    { projectId: 'IVY_CPH_AUTUMN_24' },
    { projectId: 'IVY_CPH_SPRING_24' },
    { projectId: 'MAMALICIOUS_BLACK_FRIDAY_2024' },
    { projectId: 'MAMALICIOUS_AUTUMN_CAMPAIGN_AW1' },
    { projectId: 'MAMALICIOUS_AUTUMN_CAMPAIGN_AW2' },
    { projectId: 'PLENTY_CAMPAIGN' },
    { projectId: 'YAS-CELEBRATION' },
    { projectId: 'YAS' },
    { projectId: 'YAS_SS4' }
  ];
}

export default function Layout({ children }) {
  return children;
}