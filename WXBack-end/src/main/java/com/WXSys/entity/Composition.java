package com.WXSys.entity;

public class Composition {

    int Cid;
    String Name;
    boolean ifHot;
    boolean ifLike;

    public boolean isIfLike() {
        return ifLike;
    }

    public void setIfLike(boolean ifLike) {
        this.ifLike = ifLike;
    }

    public int getCid() {
        return Cid;
    }

    public void setCid(int cid) {
        Cid = cid;
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
