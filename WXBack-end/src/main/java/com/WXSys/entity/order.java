package com.WXSys.entity;

public class order {

    int Hid;
    int Pid;
    int Uid;
    int Gid;
    int Time;
    int ifAgree;

    public int getHid() {
        return Hid;
    }

    public void setHid(int hid) {
        Hid = hid;
    }

    public int getPid() {
        return Pid;
    }

    public void setPid(int pid) {
        Pid = pid;
    }

    public int getUid() {
        return Uid;
    }

    public void setUid(int uid) {
        Uid = uid;
    }

    public int getGid() {
        return Gid;
    }

    public void setGid(int gid) {
        Gid = gid;
    }

    public int getTime() {
        return Time;
    }

    public void setTime(int time) {
        Time = time;
    }

    public int getIfAgree() {
        return ifAgree;
    }

    public void setIfAgree(int ifAgree) {
        this.ifAgree = ifAgree;
    }
}
