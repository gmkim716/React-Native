import React from "react";
import HomeInvestSummary from "@/features/invest/ui/home/HomeInvestSummary";
import HomeSectionLayout from "@/features/invest/ui/home/HomeSectionLayout";

export default function HomeDepositSection() {
  
  return (
    <HomeSectionLayout>
      <HomeInvestSummary secTitle="예적금" totalVal={12345} totalValDiff={13.45} totalValDiffRate={12.34} />
    </HomeSectionLayout>
  )
}
