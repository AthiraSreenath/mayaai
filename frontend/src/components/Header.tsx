import React from "react";
import styled from "@emotion/styled";

import { NavLink } from "react-router-dom";

import { Routes } from "./App";

const Container = styled.header`
    background-color: rgba(127, 127, 127, 0.5);
    height: 38px;
    padding: 4px 10px;

    .logo-container {
        display: inline-block;
        width: 100px;
        height: 30px;
        padding: 3px;

        .logo-text {
            vertical-align: top;
            margin-left: 3px;
        }
    }

    .nav-bar {
        display: inline-block;
        vertical-align: top;
        padding-top: 3px;
        padding-left: 10px;

        a {
            padding: 0px 10px 6px 10px;

            &.active {
                border-bottom: 3px solid rgb(2, 179, 133);
            }
        }
    }
`;

const Header = (): JSX.Element => {
    return (
        <Container>
            <div className="logo-container">
                <img src="/logo.svg" height={24} alt="MayaAI Logo" />
                <span className="logo-text">Maya<b>AI</b></span>
            </div>
            <div className="nav-bar">
                <NavLink
                    to={Routes.Models}
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    Models
                </NavLink>
                <NavLink
                    to={Routes.Datasets}
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    Datasets
                </NavLink>
            </div>
        </Container>
    );
}
export default Header;
