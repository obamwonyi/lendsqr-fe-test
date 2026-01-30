# Documentation

## About 
This project was implemented for the lendsqr

## Project Structure :
```shell
src/
├── App.tsx
├── components
│   ├── DashboardComponents
│   │   ├── DashboardHeader.tsx
│   │   ├── DashboardSidebar.tsx
│   │   └── SideBarNavScreens
│   │       ├── Guarantors
│   │       └── Users
│   │           ├── UsersComponents
│   │           │   ├── OrganizationModalCard.tsx
│   │           │   ├── PersonalInfoCard.tsx
│   │           │   ├── TableItemActionsCard.tsx
│   │           │   ├── TopHorizontalCards.tsx
│   │           │   ├── UsersDetailsCard.tsx
│   │           │   ├── UsersDetailsFullDataCard.tsx
│   │           │   ├── UsersDetailsTopCard.tsx
│   │           │   ├── UsersInfoCard.tsx
│   │           │   ├── UsersListTableCard.tsx
│   │           │   └── UsersTableFilter.tsx
│   │           ├── UsersDetialsComponents
│   │           ├── UsersDetials.tsx
│   │           └── Users.tsx
│   └── Empty
├── constants
│   └── breakpoints.ts
├── hooks
│   ├── useLogin.ts
│   ├── useMediaQuery.ts
│   └── useUsersData.ts
├── main.tsx
├── pages
│   ├── Dashboard.tsx
│   ├── Login.tsx
│   └── Screens
│       ├── DashboardDesktop.tsx
│       ├── DashboardMobile.tsx
│       ├── LoginDesktop.tsx
│       └── LoginMobile.tsx
└── styles
    ├── dashboard-layout.scss
    ├── dashboard-mobile.scss
    ├── _fonts.scss
    ├── globals.scss
    ├── login-desktop.scss
    ├── login-mobile.scss
    ├── _mixins.scss
    ├── _reset.scss
    ├── table-item-actions.scss
    ├── user-info-card.scss
    ├── users-details-full-data-card.scss
    ├── users-details-top-card.scss
    ├── users-filter.scss
    ├── users.scss
    ├── user-table.scss
    └── _variables.scss
```
