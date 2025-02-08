import InvestSummary from "@/features/invest/ui/home/InvestSummary";
import SectionLayout from "@/features/invest/ui/home/SectionLayout";
import {Link} from "expo-router";

export default function DepositSection() {
  
  return (
    <SectionLayout>
      <InvestSummary
        secTitle="예적금"
        totalVal={12345}
        totalValDiff={13.45}
        totalValDiffRate={12.34}
        pathname="@/app/(stack)/login"
      />
    </SectionLayout>
  )
}
