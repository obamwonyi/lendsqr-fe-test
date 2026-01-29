import { useState } from "react";

export interface User {
  id: string;
  organization: string;
  username: string;
  email: string;
  phone: string;
  dateJoined: string;
  status: "Inactive" | "Pending" | "Blacklisted" | "Active";
}

export interface UserDetails extends User {
  avatar?: string;
  fullName: string;
  userId: string;
  tier: number;
  bankBalance: number;
  accountNumber: string;
  bankName: string;
  personalInfo: {
    fullName: string;
    phoneNumber: string;
    emailAddress: string;
    bvn: string;
    gender: string;
    maritalStatus: string;
    children: string;
    typeOfResidence: string;
  };
  education: {
    level: string;
    employmentStatus: string;
    sector: string;
    duration: string;
    officeEmail: string;
    monthlyIncome: string;
    loanRepayment: string;
  };
  socials: {
    twitter: string;
    facebook: string;
    instagram: string;
  };
  guarantor: {
    fullName: string;
    phoneNumber: string;
    emailAddress: string;
    relationship: string;
  }[];
}

export function useUsersData() {
  const users: User[] = [
    { id: "1", organization: "Lendsqr", username: "Adedeji", email: "adedeji@lendsqr.com", phone: "08078903721", dateJoined: "May 15, 2020 10:00 AM", status: "Inactive" },
    { id: "2", organization: "Irorun", username: "Debby Ogana", email: "debby2@irorun.com", phone: "08160780928", dateJoined: "Apr 30, 2020 10:00 AM", status: "Pending" },
    { id: "3", organization: "Lendstar", username: "Grace Effiom", email: "grace@lendstar.com", phone: "07060780922", dateJoined: "Apr 30, 2020 10:00 AM", status: "Blacklisted" },
    { id: "4", organization: "Lendsqr", username: "Tosin Dokunmu", email: "tosin@lendsqr.com", phone: "07003309226", dateJoined: "Apr 10, 2020 10:00 AM", status: "Active" },
    { id: "5", organization: "Lendsqr", username: "Adedeji", email: "adedeji@lendsqr.com", phone: "08078903721", dateJoined: "May 15, 2020 10:00 AM", status: "Inactive" },
    { id: "6", organization: "Irorun", username: "Debby Ogana", email: "debby2@irorun.com", phone: "08160780928", dateJoined: "Apr 30, 2020 10:00 AM", status: "Pending" },
    { id: "7", organization: "Lendstar", username: "Grace Effiom", email: "grace@lendstar.com", phone: "07060780922", dateJoined: "Apr 30, 2020 10:00 AM", status: "Blacklisted" },
    { id: "8", organization: "Lendsqr", username: "Tosin Dokunmu", email: "tosin@lendsqr.com", phone: "07003309226", dateJoined: "Apr 10, 2020 10:00 AM", status: "Active" },
    { id: "9", organization: "Lendsqr", username: "Adedeji", email: "adedeji@lendsqr.com", phone: "08078903721", dateJoined: "May 15, 2020 10:00 AM", status: "Inactive" },
    { id: "10", organization: "Irorun", username: "Debby Ogana", email: "debby2@irorun.com", phone: "08160780928", dateJoined: "Apr 30, 2020 10:00 AM", status: "Pending" },
    { id: "11", organization: "Lendstar", username: "Grace Effiom", email: "grace@lendstar.com", phone: "07060780922", dateJoined: "Apr 30, 2020 10:00 AM", status: "Blacklisted" },
    { id: "12", organization: "Lendsqr", username: "Tosin Dokunmu", email: "tosin@lendsqr.com", phone: "07003309226", dateJoined: "Apr 10, 2020 10:00 AM", status: "Active" },
  ];

  const userDetailsMap: Record<string, UserDetails> = {
    "1": {
      id: "1",
      organization: "Lendsqr",
      username: "Adedeji",
      email: "adedeji@lendsqr.com",
      phone: "08078903721",
      dateJoined: "May 15, 2020 10:00 AM",
      status: "Inactive",
      fullName: "Adedeji Johnson",
      userId: "LSQf1587g90",
      tier: 1,
      bankBalance: 200000.00,
      accountNumber: "9912345678",
      bankName: "Providus Bank",
      personalInfo: {
        fullName: "Adedeji Johnson",
        phoneNumber: "08078903721",
        emailAddress: "adedeji@lendsqr.com",
        bvn: "07060780922",
        gender: "Male",
        maritalStatus: "Single",
        children: "None",
        typeOfResidence: "Parent's Apartment",
      },
      education: {
        level: "B.Sc",
        employmentStatus: "Employed",
        sector: "FinTech",
        duration: "2 years",
        officeEmail: "adedeji@lendsqr.com",
        monthlyIncome: "₦200,000.00- ₦400,000.00",
        loanRepayment: "40,000",
      },
      socials: {
        twitter: "@adedeji_johnson",
        facebook: "Adedeji Johnson",
        instagram: "@adedeji_johnson",
      },
      guarantor: [
        {
          fullName: "Debby Ogana",
          phoneNumber: "07060780922",
          emailAddress: "debby@gmail.com",
          relationship: "Sister",
        },
        {
          fullName: "Mary Johnson",
          phoneNumber: "07060780922",
          emailAddress: "mary@gmail.com",
          relationship: "Mother",
        },
      ],
    },
    "2": {
      id: "2",
      organization: "Irorun",
      username: "Debby Ogana",
      email: "debby2@irorun.com",
      phone: "08160780928",
      dateJoined: "Apr 30, 2020 10:00 AM",
      status: "Pending",
      fullName: "Debby Ogana",
      userId: "LSQf9087d21",
      tier: 2,
      bankBalance: 150000.00,
      accountNumber: "9812345678",
      bankName: "GTBank",
      personalInfo: {
        fullName: "Debby Ogana",
        phoneNumber: "08160780928",
        emailAddress: "debby2@irorun.com",
        bvn: "08160780928",
        gender: "Female",
        maritalStatus: "Married",
        children: "2",
        typeOfResidence: "Own House",
      },
      education: {
        level: "M.Sc",
        employmentStatus: "Employed",
        sector: "Healthcare",
        duration: "5 years",
        officeEmail: "debby@irorun.com",
        monthlyIncome: "₦300,000.00- ₦500,000.00",
        loanRepayment: "60,000",
      },
      socials: {
        twitter: "@debby_ogana",
        facebook: "Debby Ogana",
        instagram: "@debby_ogana",
      },
      guarantor: [
        {
          fullName: "John Ogana",
          phoneNumber: "08160780928",
          emailAddress: "john@gmail.com",
          relationship: "Husband",
        },
        {
          fullName: "Sarah Ogana",
          phoneNumber: "08160780928",
          emailAddress: "sarah@gmail.com",
          relationship: "Sister",
        },
      ],
    },
    "3": {
      id: "3",
      organization: "Lendstar",
      username: "Grace Effiom",
      email: "grace@lendstar.com",
      phone: "07060780922",
      dateJoined: "Apr 30, 2020 10:00 AM",
      status: "Blacklisted",
      fullName: "Grace Effiom",
      userId: "LSQf1587g90",
      tier: 1,
      bankBalance: 200000.00,
      accountNumber: "9912345678",
      bankName: "Providus Bank",
      personalInfo: {
        fullName: "Grace Effiom",
        phoneNumber: "07060780922",
        emailAddress: "grace@gmail.com",
        bvn: "07060780922",
        gender: "Female",
        maritalStatus: "Single",
        children: "None",
        typeOfResidence: "Parent's Apartment",
      },
      education: {
        level: "B.Sc",
        employmentStatus: "Employed",
        sector: "FinTech",
        duration: "2 years",
        officeEmail: "grace@lendsqr.com",
        monthlyIncome: "₦200,000.00- ₦400,000.00",
        loanRepayment: "40,000",
      },
      socials: {
        twitter: "@grace_effiom",
        facebook: "Grace Effiom",
        instagram: "@grace_effiom",
      },
      guarantor: [
        {
          fullName: "Debby Ogana",
          phoneNumber: "07060780922",
          emailAddress: "debby@gmail.com",
          relationship: "Sister",
        },
        {
          fullName: "Debby Ogana",
          phoneNumber: "07060780922",
          emailAddress: "debby@gmail.com",
          relationship: "Sister",
        },
      ],
    },
    "4": {
      id: "4",
      organization: "Lendsqr",
      username: "Tosin Dokunmu",
      email: "tosin@lendsqr.com",
      phone: "07003309226",
      dateJoined: "Apr 10, 2020 10:00 AM",
      status: "Active",
      fullName: "Tosin Dokunmu",
      userId: "LSQf4567h89",
      tier: 3,
      bankBalance: 500000.00,
      accountNumber: "9712345678",
      bankName: "Access Bank",
      personalInfo: {
        fullName: "Tosin Dokunmu",
        phoneNumber: "07003309226",
        emailAddress: "tosin@lendsqr.com",
        bvn: "07003309226",
        gender: "Male",
        maritalStatus: "Married",
        children: "1",
        typeOfResidence: "Own House",
      },
      education: {
        level: "Ph.D",
        employmentStatus: "Self-Employed",
        sector: "Technology",
        duration: "10 years",
        officeEmail: "tosin@business.com",
        monthlyIncome: "₦500,000.00- ₦800,000.00",
        loanRepayment: "100,000",
      },
      socials: {
        twitter: "@tosin_dokunmu",
        facebook: "Tosin Dokunmu",
        instagram: "@tosin_dokunmu",
      },
      guarantor: [
        {
          fullName: "Nike Dokunmu",
          phoneNumber: "07003309226",
          emailAddress: "nike@gmail.com",
          relationship: "Wife",
        },
        {
          fullName: "Bola Dokunmu",
          phoneNumber: "07003309226",
          emailAddress: "bola@gmail.com",
          relationship: "Brother",
        },
      ],
    },
  };

  const getUserDetails = (userId: string): UserDetails | null => {
    return userDetailsMap[userId] || null;
  };

  return {
    users,
    getUserDetails,
  };
}