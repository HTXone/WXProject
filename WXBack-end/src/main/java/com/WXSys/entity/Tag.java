package com.WXSys.entity;

public class Tag {

    int Tid;
    String Name;
    boolean ifHot;
    boolean ifLike;

    public boolean isIfLike() {
        return ifLike;
    }

    public void setIfLike(boolean ifLike) {
        this.ifLike = ifLike;
    }

    public int getTid() {
        return Tid;
    }

    public void setTid(int tid) {
        Tid = tid;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public boolean isIfHot() {
        return ifHot;
    }

    public void setIfHot(boolean ifHot) {
        this.ifHot = ifHot;
    }
}
