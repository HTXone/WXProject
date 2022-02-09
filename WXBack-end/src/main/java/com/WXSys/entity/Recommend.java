package com.WXSys.entity;

import java.util.List;

public class Recommend {

    int Rid;
    int Gid;
    int Uid;
    int Pid;
    int ifOver;
    String PName;
    String UName;
    List<String> agreeUsers;
    List<String> disagreeUsers;

    public String getPName() {
        return PName;
    }

    public void setPName(String PName) {
        this.PName = PName;
    }

    public String getUName() {
        return UName;
    }

    public void setUName(String UName) {
        this.UName = UName;
    }

    public int getIfOver() {
        return ifOver;
    }

    public void setIfOver(int ifOver) {
        this.ifOver = ifOver;
    }

    public List<String> getAgreeUsers() {
        return agreeUsers;
    }

    public void setAgreeUsers(List<String> agreeUsers) {
        this.agreeUsers = agreeUsers;
    }

    public int getRid() {
        return Rid;
    }

    public void setRid(int rid) {
        Rid = rid;
    }

    public int getGid() {
        return Gid;
    }

    public void setGid(int gid) {
        Gid = gid;
    }

    public int getUid() {
        return Uid;
    }

    public void setUid(int uid) {
        Uid = uid;
    }

    public int getPid() {
        return Pid;
    }

    public void setPid(int pid) {
        Pid = pid;
    }

    public List<String> getDisagreeUsers() {
        return disagreeUsers;
    }

    public void setDisagreeUsers(List<String> disagreeUsers) {
        this.disagreeUsers = disagreeUsers;
    }
}
