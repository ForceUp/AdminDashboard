export interface DashboardDataModel {
	objstatus: StatusModel;
	objHomePageTarget: PageTargetModel;
	objHomePagePipeline: PagePipeLineModel;
	objHomePageSales: PageSalesModel;
	objHomePageDeal: PageDealModel;
	objHomePageBestvsCurrent: any;
	objHomePageLost: PageLostModel;
}

export interface StatusModel {
	status: boolean;
}

export interface PageTargetModel {
	targetAchieved: number;
	daysRemaining: number;
	percentageRemaining: number;
	prospectsCreated: number;
	prospectsAssigned: number;
	prospectsReached: number;
	fileProcessing: number;
	followup: number;
	lostValues: number;
}

export interface PagePipeLineModel {
	targetValue: number;
	fuValue: number;
	fuPercent: number;
	conValue: number;
	conPercent: number;
	f2fValue: number;
	f2fPercent: number;
	dcValue: number;
	dcPercent: number;
	fpValue: number;
	fpPercent: number;
}

export interface PageSalesModel {
	conCreated: number;
	conAssigned: number;
	inFolup: number;
	fac2fac: number;
	filProcessing: number;
	salClosed: number;
}

export interface PageDealModel {
	created: number;
	creatConversion: number;
	followUp: number;
	fuConversion: number;
	fac2fac: number;
	f2fConversion: number;
	docCollection: number;
	dcConversion: number;
	fileProcessing: number;
	fpConversion: number;
	closedWon: number;
	cwConversion: number;
	closedLost: number;
	clConversion: number;
}

export interface PageLostModel {
	badCibil: number;
	salMismatch: number;
	generalInquiry: number;
	intMismatch: number;
	alreadyBought: number;
	lessLoanAmt: number;
	highFees: number;
}
